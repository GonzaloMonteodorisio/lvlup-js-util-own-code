import useSWR from 'swr';
export const useGet = ({ key, fetcher }) => {
    const { data, error, isValidating } = useSWR(key, fetcher);
    return { data, error, isValidating };
};
