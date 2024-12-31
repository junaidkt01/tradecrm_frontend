import { useState } from "react";
import MenuPopup from "../../../components/MenuPopup/MenuPopup"
import { useWorkspace, Workspace } from "../../../Hooks/useWorkspace";

const menuPopupContents = [
    {
        id: 1,
        title: "Settings",
        icon: ` <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.165 1.5H8.835C8.43718 1.5 8.05565 1.65804 7.77434 1.93934C7.49304 2.22064 7.335 2.60218 7.335 3V3.135C7.33473 3.39804 7.26529 3.65639 7.13366 3.88413C7.00202 4.11186 6.8128 4.30098 6.585 4.4325L6.2625 4.62C6.03447 4.75165 5.77581 4.82096 5.5125 4.82096C5.2492 4.82096 4.99053 4.75165 4.7625 4.62L4.65 4.56C4.3058 4.36145 3.89688 4.30758 3.513 4.41023C3.12913 4.51288 2.80166 4.76365 2.6025 5.1075L2.4375 5.3925C2.23895 5.7367 2.18508 6.14562 2.28773 6.5295C2.39038 6.91338 2.64115 7.24084 2.985 7.44L3.0975 7.515C3.32421 7.64588 3.51272 7.83382 3.64429 8.06012C3.77586 8.28643 3.84592 8.54323 3.8475 8.805V9.1875C3.84855 9.45182 3.77974 9.71171 3.64803 9.94088C3.51633 10.17 3.32641 10.3603 3.0975 10.4925L2.985 10.56C2.64115 10.7592 2.39038 11.0866 2.28773 11.4705C2.18508 11.8544 2.23895 12.2633 2.4375 12.6075L2.6025 12.8925C2.80166 13.2363 3.12913 13.4871 3.513 13.5898C3.89688 13.6924 4.3058 13.6386 4.65 13.44L4.7625 13.38C4.99053 13.2483 5.2492 13.179 5.5125 13.179C5.77581 13.179 6.03447 13.2483 6.2625 13.38L6.585 13.5675C6.8128 13.699 7.00202 13.8881 7.13366 14.1159C7.26529 14.3436 7.33473 14.602 7.335 14.865V15C7.335 15.3978 7.49304 15.7794 7.77434 16.0607C8.05565 16.342 8.43718 16.5 8.835 16.5H9.165C9.56283 16.5 9.94436 16.342 10.2257 16.0607C10.507 15.7794 10.665 15.3978 10.665 15V14.865C10.6653 14.602 10.7347 14.3436 10.8663 14.1159C10.998 13.8881 11.1872 13.699 11.415 13.5675L11.7375 13.38C11.9655 13.2483 12.2242 13.179 12.4875 13.179C12.7508 13.179 13.0095 13.2483 13.2375 13.38L13.35 13.44C13.6942 13.6386 14.1031 13.6924 14.487 13.5898C14.8709 13.4871 15.1983 13.2363 15.3975 12.8925L15.5625 12.6C15.7611 12.2558 15.8149 11.8469 15.7123 11.463C15.6096 11.0791 15.3588 10.7517 15.015 10.5525L14.9025 10.4925C14.6736 10.3603 14.4837 10.17 14.352 9.94088C14.2203 9.71171 14.1515 9.45182 14.1525 9.1875V8.8125C14.1515 8.54818 14.2203 8.28829 14.352 8.05912C14.4837 7.82995 14.6736 7.63966 14.9025 7.5075L15.015 7.44C15.3588 7.24084 15.6096 6.91338 15.7123 6.5295C15.8149 6.14562 15.7611 5.7367 15.5625 5.3925L15.3975 5.1075C15.1983 4.76365 14.8709 4.51288 14.487 4.41023C14.1031 4.30758 13.6942 4.36145 13.35 4.56L13.2375 4.62C13.0095 4.75165 12.7508 4.82096 12.4875 4.82096C12.2242 4.82096 11.9655 4.75165 11.7375 4.62L11.415 4.4325C11.1872 4.30098 10.998 4.11186 10.8663 3.88413C10.7347 3.65639 10.6653 3.39804 10.665 3.135V3C10.665 2.60218 10.507 2.22064 10.2257 1.93934C9.94436 1.65804 9.56283 1.5 9.165 1.5Z" stroke="#1E1F24" strokeLinecap="round" strokeLinejoin="round" />
<path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" stroke="#1E1F24" strokeLinecap="round" strokeLinejoin="round" />
</svg>`
    },
    {
        id: 2,
        title: "Edit",
        icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.8805 5.1088C16.277 4.71236 16.4998 4.17465 16.4999 3.61394C16.4999 3.05323 16.2773 2.51545 15.8808 2.11892C15.4844 1.72239 14.9467 1.49958 14.386 1.49951C13.8253 1.49944 13.2875 1.72212 12.891 2.11855L2.88145 12.1303C2.70732 12.3039 2.57854 12.5177 2.50645 12.7528L1.5157 16.0168C1.49632 16.0817 1.49485 16.1506 1.51146 16.2162C1.52807 16.2818 1.56214 16.3417 1.61005 16.3895C1.65796 16.4374 1.71792 16.4713 1.78357 16.4879C1.84922 16.5044 1.91812 16.5028 1.98295 16.4833L5.2477 15.4933C5.48258 15.4219 5.69633 15.2939 5.8702 15.1205L15.8805 5.1088Z" stroke="#1E1F24" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.25 3.75L14.25 6.75" stroke="#1E1F24" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>`
    },
    {
        id: 3,
        title: "Delete",
        icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.25 4.5H15.75" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.25 4.5V15C14.25 15.75 13.5 16.5 12.75 16.5H5.25C4.5 16.5 3.75 15.75 3.75 15V4.5" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 4.5V3C6 2.25 6.75 1.5 7.5 1.5H10.5C11.25 1.5 12 2.25 12 3V4.5" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 8.25V12.75" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 8.25V12.75" stroke="#CC0000" strokeLinecap="round" strokeLinejoin="round"/>
</svg>`,
        color: "red"
    }
]

const WorksSpaceCard = ({ data, onButtonClick }: { data: Workspace; onButtonClick: (method: string, workspace?: Workspace) => void; }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onChangeTogglePopup = (title: string) => {
        if (title === "Delete") {
            handleDeleteBonus(data.id)
        }
        if (title === "Edit") {
            onButtonClick("edit", data)
        }
        setIsMenuOpen(false);
    }

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { deleteWorkspace } = useWorkspace({})

    const handleDeleteBonus = (id: any) => {
        if (confirm('Are you sure you want to close this ticket?')) {
            deleteWorkspace.mutate(id, {
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

    return (
        <div className="works-space-card" >
            <div className="works-space-card-top" >
                <div className="title">
                    <div className="title-circle" >
                        <div className="circle"></div>
                        {/* <p>{data.title}</p> */}
                        <p>#Workspace1</p>
                    </div>
                    <div style={{ position: "relative" }} >
                        <div className="card-menu-icon" onClick={handleClick} >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 6.75C11.8011 6.75 11.6103 6.67098 11.4697 6.53033C11.329 6.38968 11.25 6.19891 11.25 6C11.25 5.80109 11.329 5.61032 11.4697 5.46967C11.6103 5.32902 11.8011 5.25 12 5.25C12.1989 5.25 12.3897 5.32902 12.5303 5.46967C12.671 5.61032 12.75 5.80109 12.75 6C12.75 6.19891 12.671 6.38968 12.5303 6.53033C12.3897 6.67098 12.1989 6.75 12 6.75ZM12 12.75C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12C12.75 12.1989 12.671 12.3897 12.5303 12.5303C12.3897 12.671 12.1989 12.75 12 12.75ZM12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18C11.25 17.8011 11.329 17.6103 11.4697 17.4697C11.6103 17.329 11.8011 17.25 12 17.25C12.1989 17.25 12.3897 17.329 12.5303 17.4697C12.671 17.6103 12.75 17.8011 12.75 18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75Z" stroke="black" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        {isMenuOpen && <MenuPopup>
                            <div className="works-space-menu-content" >
                                {
                                    menuPopupContents.map((item, i) => {
                                        return (
                                            <div className="works-space-menu" key={i} onClick={() => onChangeTogglePopup(item.title)} >
                                                <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                                <p style={{ color: item.color }} >{item.title}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </MenuPopup>}
                    </div>

                </div>
                <div className="works-space-card-content" >
                    <p>Workspace Name: <strong>{data.workspace_name}</strong></p>
                    <p>Workspace ID: <strong>{data.external_id}</strong></p>
                </div>
            </div>
            <div className="works-space-card-bottom" >
                {
                    data.products.map((permisn, i) => <button key={i} >{permisn.title}</button>)
                }
            </div>
        </div>
    )
}

export default WorksSpaceCard