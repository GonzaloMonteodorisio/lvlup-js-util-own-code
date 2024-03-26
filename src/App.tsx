import * as React from 'react'
import { useGet } from './hooks/useGet'

const baseUrl = 'https://jsonplaceholder.typicode.com'

interface ResponseType {
  id: string,
  name: string
}

function App() {
  // SOLID -> Single, Open Closed, Interface segregation, Dependency inversion

  /*
  const storageFetcher = () => {
    const data = localStorage.getItem('users');
    return data ? JSON.parse(data) : []
  }
  */

  const fetcher = async (): Promise<ResponseType[]> => {
    const url = `${baseUrl}/users`
    const res = await fetch(url)
    return res.json()
  }

  const {data} = useGet<ResponseType[]>({
    key: '/users',
    fetcher
  })
  console.info('App - data: ', data)
  return (
    <h3>Example</h3>
  )
}

export default App