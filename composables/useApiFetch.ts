import { useFetch, type UseFetchOptions } from "nuxt/app";

export const useApiFetch = <T>(url: string, options?: UseFetchOptions<T>) => {
  const runtimeConfig = useRuntimeConfig()

  return useFetch(runtimeConfig.public.apiBase + url, {
    ...options,
    server: true
  });
};
