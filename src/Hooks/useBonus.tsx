import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { createAxiosConfig, bonus_api } from '../queries/localAPIs';

export interface BonusType {
    id?: number;
    bonus_name: string;
    bonus_level: number,
    bonus_type: string;
    bonus_amount: string;
    expiry_date: string;
    status: string,
    created_at?: string;
    updated_at?: string;
}

export const useBonus = () => {
    const queryClient = useQueryClient();

    const fetchBonuses = useQuery({
        queryKey: ['bonus'],
        queryFn: async () => {
            const config = createAxiosConfig();
            const response = await axios.get<BonusType[]>(bonus_api.get, config);
            return response.data;
        }
    })

    const addBonus = useMutation({
        mutationFn: async (newBonus: BonusType | undefined) => {
            console.log("newBonus: ", newBonus)
            const config = createAxiosConfig();
            const response = await axios.post(bonus_api.post, { ...newBonus, status: "Active" }, config);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bonus'] });
        },
    });

    const updateBonus = useMutation({
        mutationFn: async (updatedBonus: BonusType) => {
            const config = createAxiosConfig();
            const { id, ...data } = updatedBonus;
            return axios.put(`${bonus_api.edit}/${id}`, data, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bonus'] });
        },
    });

    const deleteBonus = useMutation({
        mutationFn: async (id: number | string | null) => {
            const config = createAxiosConfig();
            return axios.delete(`${bonus_api.delete}/${id}`, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['bonus'] });
        },
    });

    return {
        fetchBonuses,
        addBonus,
        updateBonus,
        deleteBonus
    }
}