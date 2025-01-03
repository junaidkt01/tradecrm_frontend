import Skeleton from "react-loading-skeleton";
import { TicketType, useTickets } from "../../Hooks/useTickets";
import Tableskeleton from "../../Skeleton/Tableskeleton";

export const OpenTicketsTable = ({ tableData, isLoading, onHandleCommentId }: { tableData: TicketType[] | undefined; isLoading: boolean; onHandleCommentId: (id: number|undefined) => void }) => {
    const { updateTicket } = useTickets({})

    const handleCloseTicket = (id: number | undefined) => {
        if (confirm('Are you sure you want to close this ticket?')) {
            updateTicket.mutate(
                { id, updatedTicket: { status: "closed" } },
                {
                    onSuccess: () => {
                        console.log(`Ticket with ID ${id} successfully closed.`);
                    },
                    onError: (error) => {
                        console.error('Error closing the ticket:', error);
                    },
                }
            );
        }
    };


    const handleCommentId = (id: number | undefined) => {
        onHandleCommentId(id)
    }

    return (
        <div className="table-component">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Subject</th>
                        <th>Created By</th>
                        <th>Priority</th>
                        <th>View Details</th>
                        <th>Close Ticket</th>
                    </tr>
                </thead>
                {!isLoading ? <tbody>
                    {tableData?.map((item, i) => (
                        <tr key={i}>
                            <td>{item.created_at}</td>
                            <td>{item.subject}</td>
                            <td>{item.created_by}</td>
                            <td>{item.priority}</td>
                            <td>
                                <svg onClick={() => handleCommentId(item?.ticket_id)} style={{ cursor: "pointer" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5271 9.2415C1.47534 9.08594 1.47534 8.91781 1.5271 8.76225C2.56735 5.6325 5.5201 3.375 9.0001 3.375C12.4786 3.375 15.4298 5.63025 16.4723 8.7585C16.5248 8.91375 16.5248 9.08175 16.4723 9.23775C15.4328 12.3675 12.4801 14.625 9.0001 14.625C5.5216 14.625 2.5696 12.3697 1.5271 9.2415Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.25 9C11.25 9.59674 11.0129 10.169 10.591 10.591C10.169 11.0129 9.59674 11.25 9 11.25C8.40326 11.25 7.83097 11.0129 7.40901 10.591C6.98705 10.169 6.75 9.59674 6.75 9C6.75 8.40326 6.98705 7.83097 7.40901 7.40901C7.83097 6.98705 8.40326 6.75 9 6.75C9.59674 6.75 10.169 6.98705 10.591 7.40901C11.0129 7.83097 11.25 8.40326 11.25 9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </td>
                            <td>
                                <svg onClick={() => handleCloseTicket(item.ticket_id)} style={{ cursor: "pointer" }} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.3125 7.3125L10.6875 10.6875M10.6875 7.3125L7.3125 10.6875M15.75 9C15.75 9.88642 15.5754 10.7642 15.2362 11.5831C14.897 12.4021 14.3998 13.1462 13.773 13.773C13.1462 14.3998 12.4021 14.897 11.5831 15.2362C10.7642 15.5754 9.88642 15.75 9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 7.20979 2.96116 5.4929 4.22703 4.22703C5.4929 2.96116 7.20979 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </td>
                        </tr>
                    ))}
                </tbody> : <Tableskeleton count={6} />
                }
            </table>
        </div>
    );
};

export const CloseTicketsTable = ({ tableData, isLoading, onHandleCommentId }: { tableData: TicketType[] | undefined; isLoading: boolean; onHandleCommentId: (id: number | undefined) => void }) => {

    const handleCommentId = (id: number | undefined) => {
        onHandleCommentId(id)
    }

    return (
        <div className="table-component">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Subject</th>
                        <th>Created By</th>
                        <th>Priority</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                {!isLoading ? <tbody>
                    {
                        tableData?.map((item, i) => <tr key={i} >
                            <td>{item.created_at}</td>
                            <td>{item.subject}</td>
                            <td>{item.created_by}</td>
                            <td>{item.priority}</td>
                            <td style={{ cursor: "pointer" }} onClick={() => handleCommentId(item.ticket_id)} >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.625 12C8.625 12.0995 8.58549 12.1948 8.51517 12.2652C8.44484 12.3355 8.34946 12.375 8.25 12.375C8.15054 12.375 8.05516 12.3355 7.98484 12.2652C7.91451 12.1948 7.875 12.0995 7.875 12C7.875 11.9005 7.91451 11.8052 7.98484 11.7348C8.05516 11.6645 8.15054 11.625 8.25 11.625C8.34946 11.625 8.44484 11.6645 8.51517 11.7348C8.58549 11.8052 8.625 11.9005 8.625 12ZM8.625 12H8.25M12.375 12C12.375 12.0995 12.3355 12.1948 12.2652 12.2652C12.1948 12.3355 12.0995 12.375 12 12.375C11.9005 12.375 11.8052 12.3355 11.7348 12.2652C11.6645 12.1948 11.625 12.0995 11.625 12C11.625 11.9005 11.6645 11.8052 11.7348 11.7348C11.8052 11.6645 11.9005 11.625 12 11.625C12.0995 11.625 12.1948 11.6645 12.2652 11.7348C12.3355 11.8052 12.375 11.9005 12.375 12ZM12.375 12H12M16.125 12C16.125 12.0995 16.0855 12.1948 16.0152 12.2652C15.9448 12.3355 15.8495 12.375 15.75 12.375C15.6505 12.375 15.5552 12.3355 15.4848 12.2652C15.4145 12.1948 15.375 12.0995 15.375 12C15.375 11.9005 15.4145 11.8052 15.4848 11.7348C15.5552 11.6645 15.6505 11.625 15.75 11.625C15.8495 11.625 15.9448 11.6645 16.0152 11.7348C16.0855 11.8052 16.125 11.9005 16.125 12ZM16.125 12H15.75M21 12C21 16.556 16.97 20.25 12 20.25C11.1372 20.251 10.278 20.1377 9.445 19.913C8.27076 20.7389 6.83833 21.1141 5.41 20.97C5.25119 20.9547 5.09307 20.933 4.936 20.905C5.42887 20.3241 5.76547 19.6272 5.914 18.88C6.004 18.423 5.781 17.979 5.447 17.654C3.93 16.178 3 14.189 3 12C3 7.444 7.03 3.75 12 3.75C16.97 3.75 21 7.444 21 12Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </td>
                        </tr>)
                    }
                </tbody> :
                    Array.from(({ length: 10 })).map((_, i) => <tbody key={i} ><tr>
                        <td> <Skeleton /> </td>
                        <td> <Skeleton /> </td>
                        <td> <Skeleton /> </td>
                        <td> <Skeleton /> </td>
                        <td> <Skeleton width={30} /> </td>
                    </tr></tbody>)
                }
            </table>
        </div>
    )
}