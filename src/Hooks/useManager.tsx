import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { createAxiosConfig, managers_api } from '../queries/localAPIs';

export interface ManagerType {
    server_name: string;
    server_type: string;
    manager_id: number;
    server_config: string;
    server_pwd: string;
    is_active: boolean;
}

export const useManagers = () => {
    const queryClient = useQueryClient();

    // Fetch all managers
    const fetchManagers = useQuery({
        queryKey: ['managers'],
        queryFn: async () => {
            const config = createAxiosConfig();
            const response = await axios.get<ManagerType[]>(`${managers_api.get}/`, config);
            return response.data;
        },
    });

    // Create a new manager
    const createManager = useMutation({
        mutationFn: async (newManager: ManagerType) => {
            const config = createAxiosConfig();
            return axios.post(`${managers_api.post}`, newManager, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['managers'] });
        },
    });

    // Update a manager
    const updateManager = useMutation({
        mutationFn: async ({ id, updatedManager }: { id: number; updatedManager: Partial<ManagerType> }) => {
            const config = createAxiosConfig();
            return axios.put(`${managers_api.edit}/${id}`, updatedManager, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['managers'] });
        },
    });

    // Delete a manager
    const deleteManager = useMutation({
        mutationFn: async (id: number) => {
            const config = createAxiosConfig();
            return axios.delete(`${managers_api.delete}/${id}`, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['managers'] });
        },
    });

    return {
        fetchManagers,
        createManager,
        updateManager,
        deleteManager,
    };
};