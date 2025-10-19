import { defineStore } from 'pinia'

interface AuthState {
  user: null | object
  isLoading: boolean,
  error: null | string,
  isRegistered: boolean,
  isAuthenticated: boolean,
}


export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isLoading: false,
    error: null,
    isRegistered: false,
    isAuthenticated: false,
  }),

  actions: {
    async signUp(email: string, password: string) {
      this.isLoading = true
      this.error = null

      try {
        await $fetch('/api/register', {
          method: 'POST',
          body: {
            email,
            password,
          },
        })

        this.isRegistered = true
      } catch (error: any) {
        this.error = error.data.error || 'Ошибка регистрации'
        console.log(error.data.error)
      } finally {
        this.isLoading = false
      }
    },
    async signIn(email: string, password: string) {
      this.isLoading = true
      this.error = null

      try {
        await $fetch('/api/login', {
          method: 'POST',
          body: {
            email,
            password,
          },
        })

        this.isAuthenticated = true
      } catch (error: any) {
        this.error = error.data.error || 'Ошибка при авторизации'
        console.log(error.data.error)
      } finally {
        this.isLoading = false
      }
    },
    async fetchProfile() {
      try {
        const data = await $fetch('/api/profile', {
          method: 'GET',
          credentials: 'include'
        })

        this.user = data
        this.isAuthenticated = true
      } catch (error: any) {
        this.error = error.data.error || 'Ошибка при авторизации'
        console.log(error.data.error)
      }
    },
  }
})
