import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { createAxiosConfig, packages_api } from '../queries/localAPIs';

export type Package = {
    id?: number;
    package_type?: string;
    package_name?: string;
    account_type?: "live" | "demo";
    max_leverage?: string;
    manager_id?: number;
    group_id?: number;
    bonus_id?: number;
    manager_name?: string;
    group_name?: string;
    bonus_name?: string;
    min_deposit?: number;
    max_deposit?: number;
    deposit_first_time?: boolean;
    every_time?: boolean;
    investment_fee?: number;
    deposit_fee?: number;
    locking_period?: number;
    withdraw_type?: string;
    withdraw_fee_type?: string;
    withdraw_fee?: number;
    admin_fee?: number;
    plan_flow?: string;
    promotion_tips?: string;
    comment?: string;
    allow_deposit?: boolean;
    allow_withdraw?: boolean;
    max_account_open?: number;
    created_at?: string;
};


interface UsePackagesParams {
    page?: number | string;
    limit?: number | string;
    id?: number | null
}

export const usePackages = ({ page = 1, limit = 10 }: UsePackagesParams) => {
    const queryClient = useQueryClient()

    const fetchPackages = useQuery({
        queryKey: ['packages', page, limit],
        queryFn: async () => {
            const config = createAxiosConfig();
            const params = new URLSearchParams({
                page: page.toString(),
                limit: limit.toString(),
            }).toString();
            const response = await axios.get<Package[]>(`${packages_api.get}?${params}`, config);
            return response.data;
        }
    });

    const addPackage = useMutation({
        mutationFn: async (newPackage: Package | undefined) => {
            const config = createAxiosConfig();
            const response = await axios.post(packages_api.post, { ...newPackage }, config);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['packages'] });
        },
    });

    const updatePackage = useMutation({
        mutationFn: async (updatedPackage: Package) => {
            const config = createAxiosConfig();
            const { id, ...data } = updatedPackage;
            return axios.put(`${packages_api.edit}/${id}`, data, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['packages'] });
        },
    });

    const deletePackages = useMutation({
        mutationFn: async (id: number | string | null) => {
            const config = createAxiosConfig();
            return axios.delete(`${packages_api.delete}/${id}`, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['packages'] });
        },
    });
    return {
        fetchPackages,
        addPackage,
        deletePackages,
        updatePackage
    };
};