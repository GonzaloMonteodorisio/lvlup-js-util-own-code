const baseUrl = 'https://jsonplaceholder.typicode.com';
export const getusers = async () => {
    const url = `${baseUrl}/users`;
    const res = await fetch(url);
    const resJson = await res.json();
    return resJson;
};
