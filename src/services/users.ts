import { type ResponseType } from '../interfaces/Users'

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getusers = async (): Promise<ResponseType[]> => {
  const url = `${baseUrl}/users`
  const res = await fetch(url)
  const resJson = await res.json()
  return resJson
}
