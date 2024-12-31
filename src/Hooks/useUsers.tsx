import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { createAxiosConfig, users_api } from '../queries/localAPIs';

export interface UserType {
    id: string;
    email: string;
    status: boolean;
    first_name: string;
    last_name: string;
    country: string;
    phone_number: string,
    account_plan: string;
    amount: number | string;
    leverage: string;
    bonus_card: string;
    server_type: string;
    created_at?: number | string
}

export const useUsers = (endpoint: string) => {
    const queryClient = useQueryClient();

    const fetchUsers = useQuery({
        queryKey: ['users', endpoint],
        queryFn: async () => {
            const config = createAxiosConfig();
            const response = await axios.get<UserType[]>(`${users_api.get}/${endpoint}`, config);
            return response.data;
        },
        enabled: !!endpoint, // Ensure the query runs only if the endpoint is defined
    });

    // Create a new user
    const createUser = useMutation({
        mutationFn: async (newUser: UserType) => {
            const config = createAxiosConfig();
            return axios.post(`${users_api.post}`, newUser, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users', endpoint] });
        },
    });

    // Update a user
    const updateUser = useMutation({
        mutationFn: async ({ id, updatedUser }: { id: number; updatedUser: Partial<UserType> }) => {
            const config = createAxiosConfig();
            return axios.put(`${users_api.edit}/${id}`, updatedUser, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users', endpoint] });
        },
    });

    // Delete a user
    const deleteUser = useMutation({
        mutationFn: async (id: number | string | null) => {
            const config = createAxiosConfig();
            return axios.delete(`${users_api.delete}/${id}`, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['users', endpoint] });
        },
    });

    return {
        fetchUsers,
        createUser,
        updateUser,
        deleteUser,
    };
};


// export const useUsers = () => {
//     const queryClient = useQueryClient();

//     // Fetch all users
//     const fetchUsers = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const config = createAxiosConfig();
//             const response = await axios.get<UserType[]>(`${users_api.get}/`, config);
//             return response.data;
//         },
//     });

//     // // Fetch all users
//     // const fetchUsers = useQuery({
//     //     queryKey: ['users'],
//     //     queryFn: async () => {
//     //         const config = createAxiosConfig();
//     //         const response = await axios.get<UserType[]>(`${users_api.get}/`, config);
//     //         return response.data;
//     //     },
//     // });

//     // Create a new user
//     const createUser = useMutation({
//         mutationFn: async (newUser: UserType) => {
//             const config = createAxiosConfig();
//             return axios.post(`${users_api.post}`, newUser, config);
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['users'] });
//         },
//     });

//     // Update a user
//     const updateUser = useMutation({
//         mutationFn: async ({ id, updatedUser }: { id: number; updatedUser: Partial<UserType> }) => {
//             const config = createAxiosConfig();
//             return axios.put(`${users_api.edit}/${id}`, updatedUser, config);
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['users'] });
//         },
//     });

//     // Delete a user
//     const deleteUser = useMutation({
//         mutationFn: async (id: number | string | null) => {
//             const config = createAxiosConfig();
//             return axios.delete(`${users_api.delete}/${id}`, config);
//         },
//         onSuccess: () => {
//             queryClient.invalidateQueries({ queryKey: ['users'] });
//         },
//     });

//     return {
//         fetchUsers,
//         createUser,
//         updateUser,
//         deleteUser,
//         // fetchKYCVerifiedUsers
//     };
// };