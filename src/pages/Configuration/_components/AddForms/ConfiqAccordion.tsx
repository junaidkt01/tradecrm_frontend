import { useRef } from "react";
import { Workspace } from "../../../../Hooks/useWorkspace";

const ConfiqAccordion = ({ isOpen, toggleAccordion, item, data }: { item: any; isOpen?: boolean, toggleAccordion?: () => void; data: Workspace | undefined }) => {
    const contentRef: any = useRef(null);
    console.log(isOpen)
    console.log("item: ", item)
    console.log("data: ", data)
    
    return (
        <div className="confiq-accordion-settings" >
            <div className="confiq-accordion-settings-title" onClick={toggleAccordion}>
                <p>{item.title}</p>
            </div>

            <div
                ref={contentRef}
                className="confiq-accordion-settings-form"
                style={{
                    maxHeight: '100%',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                    padding: "16px 16px"
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }} >
                    {
                        item?.access?.map((settings: any, i: number) => {
                            return (
                                <div key={i} className="checkbox-inputs-wrapper">
                                    <div className="checkbox-input packages-checkbox" >
                                        <input type="checkbox" name="" id="" />
                                        <p>{settings.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ConfiqAccordion
