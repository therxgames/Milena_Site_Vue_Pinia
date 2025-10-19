export default defineNuxtRouteMiddleware(async (to) => {
  const privateRoutes = ['/dashboard']

  if (!privateRoutes.includes(to.path)) return

  if (import.meta.client) {
    const authStore = useAuthStore()
    await authStore.fetchProfile()

    if (!authStore.isAuthenticated) {
      return navigateTo('/login')
    }
  }
})
