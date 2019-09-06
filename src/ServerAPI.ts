import React from 'react';
import ServerService from './ServerService';

interface Contact {
    name: string,
    email: string
}

interface APIResponse<T> {
    isLoading: boolean,
    data: T | null,
    refreshData: () => Promise<void>,
}

const useAPI = <T>(url: string): APIResponse<T> => {
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [data, setData] = React.useState<T | null>(null);
    const [error, setError] = React.useState<Error>();

    React.useEffect(() => {
        refreshData();
    }, []);

    const refreshData = async () => {
        setIsLoading(true);
        try {
            const response = await ServerService.get(url);
            setData(await response.data);
        } catch (error) {
            error.message = 'Server API Error: ' + error.message;
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    if (error) throw error;
    return { isLoading, data, refreshData };
};

export default class ServerAPI {
    static useGetContacts = (): APIResponse<Contact[]> => {
        return useAPI<Contact[]>('/users');
    };
}
