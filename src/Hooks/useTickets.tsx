import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { createAxiosConfig, ticket_api } from '../queries/localAPIs';

export interface TicketType {
    created_at?: string;
    ticket_id?: number;
    department: string;
    subject: string;
    message: string;
    query_type: string;
    priority: string;
    created_by: string;
    status: string;
    close_timestamp?: string;
}

export interface TicketTypeData {
    success: boolean;
    tickets: TicketType[];
}

interface UseTicketsParams {
    status?: string;
    searchTerm?: string;
    page?: number | string;
    limit?: number | string;
    id?: number | null
}

export const useTickets = ({ status = '', searchTerm = '', page = 1, limit = 10, id }: UseTicketsParams) => {
    const queryClient = useQueryClient();

    const fetchTickets = useQuery({
        queryKey: ['tickets', status, searchTerm, page, limit],
        queryFn: async () => {
            const config = createAxiosConfig();
            const params = new URLSearchParams({
                status,
                searchTerm,
                page: page.toString(),
                limit: limit.toString(),
            }).toString();
            const response = await axios.get<TicketTypeData>(`${ticket_api.get}?${params}`, config);
            return response.data;
        },
        enabled: !!status,
    });

    const createTicket = useMutation({
        mutationFn: async (newTicket: TicketType) => {
            const config = createAxiosConfig();
            return axios.post(ticket_api.post, newTicket, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tickets'] });
        },
        onError: (error) => {
            console.error('Error creating ticket:', error);
        },
    });

    const addTicketComment = useMutation({
        mutationFn: async (newComment: { ticketId: number; comment: string }) => {
            const config = createAxiosConfig();
            return axios.post(ticket_api.addComment, newComment, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['ticket-comments'] });
        },
        onError: (error) => {
            console.error('Error adding ticket comment:', error);
        },
    });

    const fetchTicketComments = useQuery({
        queryKey: ['ticket-comments'],
        queryFn: async () => {
            const config = createAxiosConfig();
            const response = await axios.get(`${ticket_api.listComments}/${id}`, config);
            return response.data;
        },
        enabled: !!id,
    });

    const updateTicket = useMutation({
        mutationFn: async ({
            id,
            updatedTicket,
        }: {
            id: number | undefined;
            updatedTicket: { status: string };
        }) => {
            const config = createAxiosConfig();
            return axios.put(`${ticket_api.edit}/${id}`, updatedTicket, config);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['tickets'] });
        },
        onError: (error) => {
            console.error('Error updating ticket:', error);
        },
    });

    return {
        fetchTickets,
        createTicket,
        updateTicket,
        addTicketComment,
        fetchTicketComments,
    };
};