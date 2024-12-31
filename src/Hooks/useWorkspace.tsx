import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { createAxiosConfig, works_space_api } from '../queries/localAPIs';

export type Workspace = {
    id: number;
    workspace_name: string;
    workspace_id: number;
    products: {
        id: number;
        title: string;
        access: {
            id: number;
            name: string;
            isEnable: boolean;
        }[]
    }[]
};

interface UseWorkspaceParams {
    page?: number | string;
    limit?: number | string;
    id?: number | null
}

export const useWorkspace = ({ page = 1, limit = 10 }: UseWorkspaceParams) => {
    const queryClient = useQueryClient()

    const fetchWorkspace = useQuery({
        queryKey: ['workspace', page, limit],
        queryFn: async () => {
            const config = createAxiosConfig();
            const params = new URLSearchParams({
                page: page?.toString(),
                limit: limit?.toString(),
            }).toString();
            const response = await axios.get<Workspace[]>(`${works_space_api.get}?${params}`, config);
            return response.data;
        }
    });

    const addWorkspace = useMutation({
        mutationFn: async (newWorkspace: Workspace | undefined) => {
            const config = createAxiosConfig();
            const response = await axios.post(works_space_api.post, { ...newWorkspace }, config);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['workspace'] });
        },
    });

    const updateWorkspace = useMutation({
        mutationFn: async (updatedWorkspace: Workspace) => {
            const config = createAxiosConfig();
            const { id, ...data } = updatedWorkspace;
            return axios.put(`${works_space_api.edit}/${id}`, data, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['workspace'] });
        },
    });

    const deleteWorkspace = useMutation({
        mutationFn: async (id: number | string | null) => {
            const config = createAxiosConfig();
            return axios.delete(`${works_space_api.delete}/${id}`, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['workspace'] });
        },
    });
    return {
        fetchWorkspace,
        addWorkspace,
        deleteWorkspace,
        updateWorkspace
    };
};