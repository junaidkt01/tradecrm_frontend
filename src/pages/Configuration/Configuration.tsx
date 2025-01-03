import { useState } from "react";
import "./Configuration.css"
import WorksSpaceCard from "./_components/WorksSpaceCard";
import AddBtn from "../../components/Buttons/AddBtn/AddBtn";
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs";
import AddWorksSpaceForm from "./_components/AddForms/AddWorksSpaceForm";
// import { workspace } from "../../utils/contents/configuration/worksSpace";
import { useWorkspace, Workspace } from "../../Hooks/useWorkspace";
import Workspaceskeleton from "../../Skeleton/Workspaceskeleton";

const Configuration = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editWorkSpace, setEditWorkSpace] = useState<Workspace>()

    const togglePopup = (method: string, bonus?: Workspace) => {
        setIsOpen(!isOpen);

        if (method === "edit") {
            setEditWorkSpace(bonus)
        } else {
            setEditWorkSpace(undefined)
        }
    };

    const { fetchWorkspace } = useWorkspace({})

    // if (fetchWorkspace.isLoading) {
    //     return <div>Loading...</div>
    // }
   
    // console.log("fetchWorkspace: ", fetchWorkspace?.data)

    return (
        <div className="configuration-page pages-wrapper" >
            <Breadcrumbs title="Configuration / Workspace" />
            <div className="table-control-btns">
                <div></div>
                <div className="add-executives-btns">
                    <AddBtn title="Add Workspace" onClick={() => togglePopup("close")} />
                </div>
            </div>
            
            {fetchWorkspace.isLoading || fetchWorkspace.isError ? (
                <Workspaceskeleton  />
            ) : (
                <div className="workspace-cards">
                    {fetchWorkspace?.data?.map((item, i) => (
                        <WorksSpaceCard onButtonClick={togglePopup} data={item} key={i} />
                    ))}
                </div>
            )}

            {/* <div className="workspace-cards">
                {
                    fetchWorkspace?.data?.map((item, i) => <WorksSpaceCard onButtonClick={togglePopup} data={item} key={i} />)
                }
            </div> */}

            {isOpen && (
                <div className="overlay"></div>
            )}
            {isOpen && (
                <AddWorksSpaceForm data={editWorkSpace} togglePopup={() => togglePopup("close")} />
            )}
        </div>
    )
}

export default Configuration
