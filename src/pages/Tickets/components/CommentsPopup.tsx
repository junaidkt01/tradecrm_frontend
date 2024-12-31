import { base_url } from "../../../base_url"
import PrimaryButton from "../../../components/Buttons/PrimaryButton/PrimaryButton"
import { useTickets } from "../../../Hooks/useTickets"
import '../Tickets.css'

const CommentsPopup = ({ onHandleViewComments, commentId }: { onHandleViewComments: () => void; commentId: number | undefined | null }) => {
    const { addTicketComment, fetchTicketComments } = useTickets({ id: commentId })

    if (fetchTicketComments.isLoading || fetchTicketComments.error) {
        return <h1>loading</h1>
    }

    const a: any = {
        ticket_id: 2,
        user_id: 3,
        comment: "This is 3th comment."
    }

    const handleSubmit = () => {
        addTicketComment.mutate(a);
    };

    return (
        // <div className="menu-inputs-form" >
        <div className="add-user-for add-popup-window" >
            <div className="reset-close-btns-responsive" >
                <p>Add User</p>
            </div>
            <div className="add-user-form-head" >
                <div className="add-user-form-controller" >
                    <p>Super Admin</p>
                </div>
                <div className="reset-close-btns" >
                    <span></span>
                    <button onClick={onHandleViewComments} ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.47007 5.47003C5.6107 5.32958 5.80132 5.25069 6.00007 5.25069C6.19882 5.25069 6.38945 5.32958 6.53007 5.47003L12.0001 10.94L17.4701 5.47003C17.5387 5.39634 17.6215 5.33724 17.7135 5.29625C17.8055 5.25526 17.9048 5.23322 18.0056 5.23144C18.1063 5.22966 18.2063 5.24819 18.2997 5.28591C18.3931 5.32363 18.4779 5.37977 18.5491 5.45099C18.6203 5.52221 18.6765 5.60705 18.7142 5.70043C18.7519 5.79382 18.7704 5.89385 18.7687 5.99455C18.7669 6.09526 18.7448 6.19457 18.7039 6.28657C18.6629 6.37857 18.6038 6.46137 18.5301 6.53003L13.0601 12L18.5301 17.47C18.6038 17.5387 18.6629 17.6215 18.7039 17.7135C18.7448 17.8055 18.7669 17.9048 18.7687 18.0055C18.7704 18.1062 18.7519 18.2062 18.7142 18.2996C18.6765 18.393 18.6203 18.4779 18.5491 18.5491C18.4779 18.6203 18.3931 18.6764 18.2997 18.7142C18.2063 18.7519 18.1063 18.7704 18.0056 18.7686C17.9048 18.7668 17.8055 18.7448 17.7135 18.7038C17.6215 18.6628 17.5387 18.6037 17.4701 18.53L12.0001 13.06L6.53007 18.53C6.3879 18.6625 6.19985 18.7346 6.00555 18.7312C5.81125 18.7278 5.62586 18.6491 5.48845 18.5117C5.35104 18.3742 5.27233 18.1889 5.2689 17.9946C5.26547 17.8003 5.33759 17.6122 5.47007 17.47L10.9401 12L5.47007 6.53003C5.32962 6.38941 5.25073 6.19878 5.25073 6.00003C5.25073 5.80128 5.32962 5.61066 5.47007 5.47003Z" fill="#1E1F24" />
                    </svg></button>
                </div>
            </div>
            <form className="add-user-form-box">
                <div style={{ display: "grid", gap: "16px", width: "98%" }} >
                    <label htmlFor="">Comment</label>
                    <textarea placeholder="Enter Your message" />
                </div>
                <div className="add-user-form-button" >
                    <PrimaryButton onClick={handleSubmit} title="Submit" />
                </div>
            </form>

            <div className="list-comments">

                {
                    fetchTicketComments?.data?.map((comment: any, i: number) => {
                        return <>
                            <div className="show-comment" key={i}>
                                <div className="commenter-profile" >
                                    <img src={`${base_url}/images/profile.jpeg`} alt="" />
                                    <h2>{comment.first_name}</h2>
                                    <p>{comment.created_at}</p>
                                    {/* <p>sep 26,2024</p> */}
                                </div>
                                <div className="commenter-comment" >
                                    <p>{comment.comment}</p>
                                </div>
                            </div>
                            <hr />
                        </>
                    })
                }
            </div>
        </div>
        // </div>
    )
}

export default CommentsPopup
