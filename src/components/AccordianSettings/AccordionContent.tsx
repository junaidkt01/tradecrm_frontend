import React from "react";

interface AccordionContentProps {
    settings: string[];
}

const AccordionContent: React.FC<AccordionContentProps> = ({ settings }) => {
    return (
        <div className="accordion-settings-form">
            {settings.map((settings_item, index) => (
                <form key={index} action="">
                    <div className="radio-inputs-wrapper">
                        <p>{settings_item}</p>
                        <div className="radio-inputs">
                            <span>
                                <input type="radio" name={`permission-${index}`} id="" />
                                <label htmlFor="">Read</label>
                            </span>
                            <span>
                                <input type="radio" name={`permission-${index}`} id="" />
                                <label htmlFor="">Edit</label>
                            </span>
                            <span>
                                <input type="radio" name={`permission-${index}`} id="" />
                                <label htmlFor="">Disable</label>
                            </span>
                        </div>
                    </div>
                </form>
            ))}
        </div>
    );
};

export default AccordionContent;
