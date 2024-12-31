import { ReactNode, useRef } from "react";

const AddPackagesAccordion = ({ isOpen = true, toggleAccordion, title, children }: { title: string; isOpen?: boolean, toggleAccordion?: () => void; children: ReactNode }) => {
    const contentRef: any = useRef(null);

    return (
        <div className="confiq-accordion-settings">
            <div className="confiq-accordion-settings-title" style={{
                borderBottomLeftRadius: isOpen ? "" : "8px",
                borderBottomRightRadius: isOpen ? "" : "8px"
            }} onClick={toggleAccordion}>
                <p>{title}</p>
                {/* <svg
                    style={{
                        transform: !isOpen ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.3s ease',
                    }}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M18 15L12 9L6 15" stroke="#1E1F24" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
            </div>
            <div
                ref={contentRef}
                className="confiq-accordion-settings-form"
                style={{
                    // maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
                    maxHeight: '100%',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                    padding: isOpen ? "16px 16px" : "0 16px"
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default AddPackagesAccordion
