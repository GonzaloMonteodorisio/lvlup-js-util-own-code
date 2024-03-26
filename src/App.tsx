import * as React from 'react'

import { useGet } from './hooks/useGet'
import { type ResponseType } from './interfaces/Users'
import { getusers } from './services/users'

function App(): React.JSX.Element {
  // SOLID -> Single, Open Closed, Interface segregation, Dependency inversion

  /*
  const storageFetcher = () => {
    const data = localStorage.getItem('users');
    return data ? JSON.parse(data) : []
  }
  */

  /*
  const fetcher = async (): Promise<ResponseType[]> => {
    const url = `${baseUrl}/users`
    const res = await fetch(url)
    return await res.json()
  }
  */

  const { data } = useGet<ResponseType[]>({
    key: '/users',
    fetcher: getusers
  })
  console.info('App - data: ', data)
  return (
    <h3>Example</h3>
  )
}

export default App
