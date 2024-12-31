import React from "react";
import AccordionContent from "./AccordionContent";

interface AccordionItemProps {
  item: {
    id: number;
    settings_title: string;
    settings: string[];
  };
  isOpen: boolean;
  toggleAccordion: (id: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, toggleAccordion }) => {
  return (
    <div className="accordian-settings">
      <div className="accordian-settings-title" onClick={() => toggleAccordion(item.id)}>
        <p>{item.settings_title}</p>
        <svg
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
            transition: 'transform 0.3s ease',
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 15L12 9L6 15" stroke="#1E1F24" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      {isOpen && <AccordionContent settings={item.settings} />}
    </div>
  );
};

export default AccordionItem;
