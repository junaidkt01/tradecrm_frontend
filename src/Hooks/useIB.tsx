import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { createAxiosConfig } from '../queries/localAPIs';

interface UseIBProps {
    searchTerm?: string;
    page?: number;
    limit?: number;
}

export const useIB = (endpoint: string, { searchTerm = '', page = 1, limit = 3 }: UseIBProps) => {
    const fetchIBData = async () => {
        const config = createAxiosConfig();
        const params = `?searchTerm=${searchTerm}&page=${page}&limit=${limit}`
        const { data } = await axios.get(`http://localhost:5000/api/ib/subib${params}`, { ...config });
        return data;
    };

    const query = useQuery({
        queryKey: ['ib-data', endpoint, searchTerm, page, limit],
        queryFn: fetchIBData,
        staleTime: 5000,
    });

    return {
        ibData: query.data?.data || [],
        isLoading: query.isLoading,
        isError: query.isError,
        refetch: query.refetch,
        totalPages: query.data?.pagination.totalPages || 0,
        totalRecords: query.data?.pagination.totalRecords || 0,
        hasNextPage: page < (query.data?.pagination.totalPages || 0),
        hasPreviousPage: page > 1,
    };
};