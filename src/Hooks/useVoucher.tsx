import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { createAxiosConfig, voucher_api } from '../queries/localAPIs';

export interface VoucherType {
    id?: string;
    name?: string;
    amount?: number;
    has_expired?: boolean;
    expiry_date?: string;
    message?: string;
    withdraw?: boolean;
    created_at?: string;
    updated_at?: string;
}

export const useVoucher = () => {
    const queryClient = useQueryClient();

    // const fetchVoucher = useQuery({
    //     queryKey: ['voucher'],
    //     queryFn: async () => {
    //         const config = createAxiosConfig();
    //         const response = await axios.get<VoucherType[]>(voucher_api.get, config);

    //         const currentDate = new Date();
    //         const updatedVouchers = response.data.map((voucher) => {
    //             const expiryDate = new Date(voucher.expiry_date);
    //             const hasExpired = expiryDate < currentDate ? 'true' : 'false';

    //             if (hasExpired === 'true' && voucher.has_expired !== 'true') {
    //                 updateVoucher.mutate({ ...voucher, has_expired: 'true' });
    //             }

    //             return { ...voucher, has_expired: hasExpired };
    //         });

    //         return updatedVouchers;
    //     }
    // });

    const fetchVoucher = useQuery({
        queryKey: ['voucher'],
        queryFn: async () => {
            const config = createAxiosConfig();
            const response = await axios.get<VoucherType[]>(voucher_api.get, config);
            return response.data;
        }
    })

    const addVoucher = useMutation({
        mutationFn: async (newVoucher: VoucherType | undefined) => {
            console.log("newVoucher: ", newVoucher)
            const config = createAxiosConfig();
            const response = await axios.post(voucher_api.post, { ...newVoucher, status: "Active" }, config);
            return response.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['voucher'] });
        },
    });

    const updateVoucher = useMutation({
        mutationFn: async (updatedVoucher: VoucherType) => {
            const config = createAxiosConfig();
            const { id, ...data } = updatedVoucher;
            return axios.put(`${voucher_api.edit}/${id}`, data, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['voucher'] });
        },
    });

    const deleteVoucher = useMutation({
        mutationFn: async (id: number | string | null) => {
            const config = createAxiosConfig();
            return axios.delete(`${voucher_api.delete}/${id}`, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['voucher'] });
        },
    });

    return {
        fetchVoucher,
        addVoucher,
        updateVoucher,
        deleteVoucher
    }
}