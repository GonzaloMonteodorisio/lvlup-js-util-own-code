import useSWR from "swr";

interface UseGet<T> {
  key: string,
  fetcher: () => Promise<T>
}

// Interface que cumple SWR
interface Response<T> {
  data: T | undefined,
  error?: string,
  isValidating: boolean
}

export const useGet = <T>({key, fetcher}: UseGet<T>): Response<T> => {
  const {data, error, isValidating} = useSWR<T>(key, fetcher)
  return {data, error, isValidating}
}



