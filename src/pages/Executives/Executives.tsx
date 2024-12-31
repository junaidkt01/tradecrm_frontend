import { useState } from "react";
import FilterBtn from "../Users/_components/FilterBtn"
import "./Executives.css"
import ExecutivesCard from "./_components/ExecutivesCard";
import AddExctvsForm from "./_components/AddExctvsForm";
import AddBtn from "../../components/Buttons/AddBtn/AddBtn";
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs";

const Executives = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="executives-page pages-wrapper" >
      <Breadcrumbs title="Exicutives / Exicutives" />
      <div className="table-control-btns">
        <div className="executives-filter-btns" >
          <FilterBtn title="Profit & Loss" isActive />
          <FilterBtn title="Deposit & Withdraw" />
          <FilterBtn title="Commission" />
        </div>
        <div className="add-executives-btns">
          <AddBtn title="Add Executives" onClick={togglePopup} />
        </div>
      </div>
      <div className="executives-cards">
        <ExecutivesCard onClick={togglePopup} />
        <ExecutivesCard onClick={togglePopup} />
        <ExecutivesCard onClick={togglePopup} />
        <ExecutivesCard onClick={togglePopup} />
        <ExecutivesCard onClick={togglePopup} />
        <ExecutivesCard onClick={togglePopup} />
      </div>

      {isOpen && (
        <div className="overlay"></div>
      )}
      {isOpen && (
        <AddExctvsForm togglePopup={togglePopup} />
      )}
    </div>
  )
}

export default Executives
