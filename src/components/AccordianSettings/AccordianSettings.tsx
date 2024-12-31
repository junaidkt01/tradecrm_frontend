import { useState } from "react";
import { accordian_settings } from "../../utils/accordianSettings";
import AccordionItem from "./AccordionItem";

const AccordionSettings = () => {
  const [isOpen, setIsOpen] = useState<null | number>(null); // Track the open accordion

  const toggleAccordion = (id: number) => {
    setIsOpen(isOpen === id ? null : id); // Toggle accordion based on id
  };

  return (
    <div className="accordian-settings-wrapper">
      {accordian_settings.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={isOpen === item.id}
          toggleAccordion={toggleAccordion}
        />
      ))}
    </div>
  );
};

export default AccordionSettings;


// import { useRef, useState } from "react";
// import { accordian_settings } from "../../utils/accordianSettings";

// const AccordianSettings = () => {

//     const [isOpen, setIsOpen] = useState<null | number>(null);
//     const contentRef: any = useRef(null);

//     const toggleAccordion = (id: number) => {
//         setIsOpen(id);
//     };

//     return (
//         <div className="accordian-settings-wrapper" >
//             {
//                 accordian_settings.map((item, i) => {
//                     return (
//                         <div key={i} className="accordian-settings">
//                             <div className="accordian-settings-title" onClick={() => toggleAccordion(item.id)} >
//                                 <p>{item.settings_title}</p>
//                                 <svg
//                                     style={{
//                                         transform: isOpen === item.id ? 'rotate(180deg)' : 'rotate(0)',
//                                         transition: 'transform 0.3s ease',
//                                     }}
//                                     width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <path d="M18 15L12 9L6 15" stroke="#1E1F24" strokeLinecap="round" strokeLinejoin="round" />
//                                 </svg>
//                             </div>

//                             {
//                                 item.settings.map((settings_item, index) => {
//                                     return (
//                                         <div
//                                             key={index}
//                                             ref={contentRef}
//                                             className="accordion-settings-form"
//                                             style={{
//                                                 maxHeight: isOpen === item.id ? `${contentRef.current.scrollHeight}px` : '0px',
//                                                 overflow: 'hidden',
//                                                 transition: 'max-height 0.3s ease',
//                                             }}
//                                         >
//                                             <form action="" >
//                                                 <div className="radio-inputs-wrapper" >
//                                                     <p>{settings_item}</p>
//                                                     <div className="radio-inputs" >
//                                                         <span>
//                                                             <input type="radio" name="" id="" />
//                                                             <label htmlFor="">Read</label>
//                                                         </span>
//                                                         <span>
//                                                             <input type="radio" name="" id="" />
//                                                             <label htmlFor="">Edit</label>
//                                                         </span>
//                                                         <span>
//                                                             <input type="radio" name="" id="" />
//                                                             <label htmlFor="">Disable</label>
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             </form>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default AccordianSettings
