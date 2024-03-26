import * as React from 'react';
import { useGet } from './hooks/useGet';
import { getusers } from './services/users';
function App() {
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
    const { data } = useGet({
        key: '/users',
        fetcher: getusers
    });
    console.info('App - data: ', data);
    return (React.createElement("h3", null, "Example"));
}
export default App;
