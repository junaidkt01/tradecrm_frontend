import { useState } from "react";
import "./Configuration.css"
import BonusCard from "./_components/BonusCard";
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs";
// import { bonus } from "../../utils/contents/configuration/bonus";
import AddBonusForm from "./_components/AddForms/AddBonusForm";
import { BonusType, useBonus } from "../../Hooks/useBonus";

const Bonus = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [editBonus, setEditBonus] = useState<BonusType>()

    const togglePopup = (method: string, bonus?: BonusType) => {
        setIsOpen(!isOpen);

        if (method === "edit") {
            setEditBonus(bonus)
        } else {
            setEditBonus(undefined)
        }
    };

    const { fetchBonuses } = useBonus()

    return (
        <div className="executives-page pages-wrapper" >
            <Breadcrumbs title="Configuration / Bonus" />
            <div className="table-control-btns" >
                <div></div>
                <div className="add-executives-btns" >
                    <button onClick={() => togglePopup("close")} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 9V15M15 12H9M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z" stroke="#7A5AF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Add Bonus</span>
                    </button>
                </div>
            </div>
            <div className="bonus-cards">
                {
                    fetchBonuses.data?.map((item, i) => <BonusCard onButtonClick={togglePopup} data={item} key={i} />)
                }
            </div>

            {isOpen && (
                <div className="overlay"></div>
            )}
            {isOpen && (
                <AddBonusForm data={editBonus} togglePopup={() => togglePopup("close")} />
            )}
        </div>
    )
}

export default Bonus;
