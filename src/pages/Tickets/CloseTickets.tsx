import { useState } from "react";
import SearchInput from "../../components/SeachInputs/SearchInput"
import { CloseTicketsTable } from "../../components/TicketsTable/TicketsTable"
import CommentsPopup from "./components/CommentsPopup";
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs";
import { useTickets } from "../../Hooks/useTickets";

const CloseTickets = () => {
    const [viewComments, setViewComments] = useState(false)
    const handleViewComments = () => {
        setViewComments(!viewComments)
    }

    const [commentId, setCommentId] = useState<number | null>(null)
    const handleCommentId = (id: number) => {
        setCommentId(id)
        setViewComments(true)
    }

    const [searchValue, setSearchValue] = useState("");
    const handleSearchChange = (value: string) => {
        setSearchValue(value);
    };

    const { fetchTickets } = useTickets({
        status: 'closed',
        searchTerm: searchValue,
        page: 1,
        limit: 10,
    });

    return (
        <div className="close-tickets-page pages-wrapper" >
            <Breadcrumbs title="Tickets / Close Tickets" />
            <div className="table-control-btns">
                <div></div>
                <div className="add-executives-btns">
                    <SearchInput onSearchChange={handleSearchChange} />
                </div>
            </div>
            <CloseTicketsTable onHandleCommentId={handleCommentId} tableData={fetchTickets?.data?.tickets} isLoading={fetchTickets?.isLoading} />

            {viewComments && (
                <>
                    <div className="overlay"></div>
                    <CommentsPopup commentId={commentId} onHandleViewComments={handleViewComments} />
                </>
            )}
        </div>
    )
}

export default CloseTickets
