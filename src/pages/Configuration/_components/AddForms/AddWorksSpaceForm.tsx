import "./style.css"
import SearchInput from "../../../../components/SeachInputs/SearchInput";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton/PrimaryButton";
// import { accordian_settings } from "../../../../utils/accordianSettings";
import { useWorkspace, Workspace } from "../../../../Hooks/useWorkspace";
import { useEffect, useState } from "react";

const AddWorksSpaceForm = ({ data, togglePopup }: { data: Workspace | undefined; togglePopup: () => void }) => {
    const [formData, setFormData] = useState<any>()

    useEffect(() => {
        if (data) {
            setFormData(data);
        } else {
            setFormData({
                id: 0,
                workspace_name: "Test 1",
                // external_id: "123",
                workspace_id: 123,
                is_default: false,
                products: [
                    {
                        id: 1,
                        title: "Traders Room",
                        access: [
                            {
                                name: "change password",
                                isEnable: false,
                            },
                            {
                                name: "KYC Document",
                                isEnable: false,
                            },
                            {
                                name: "Account Status",
                                isEnable: false,
                            },
                            {
                                name: "IB Linkage",
                                isEnable: false,
                            },
                            {
                                name: "Delete User",
                                isEnable: false,
                            },
                            {
                                name: "Profile Status",
                                isEnable: false,
                            },
                            {
                                name: "Send Email",
                                isEnable: false,
                            },
                            {
                                name: "Download Report",
                                isEnable: false,
                            },
                            {
                                name: "Contact Info",
                                isEnable: false,
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: "Partner Area",
                        access: [
                            {
                                name: "Full Access",
                                isEnable: false,
                            },
                            {
                                name: "Level Hierarchy",
                                isEnable: false,
                            },
                            {
                                name: "Level Commission",
                                isEnable: false,
                            },
                            {
                                name: "Level Trade(Pay Comm.)",
                                isEnable: false,
                            },
                            {
                                name: "Level Commission History",
                                isEnable: false,
                            },
                            {
                                name: "No Access",
                                isEnable: false,
                            },
                        ]
                    }
                ]
            });
        }
    }, [data]);

    const handleTogglePopup = () => {
        togglePopup();
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, productId: number, accessName: string) => {
        setFormData((prevData: any) => ({
            ...prevData,
            products: prevData.products.map((product: any) =>
                product.id === productId
                    ? {
                        ...product,
                        access: product.access.map((access: any) =>
                            access.name === accessName
                                ? { ...access, isEnable: e.target.checked }
                                : access
                        ),
                    }
                    : product
            ),
        }));
    };

    const { addWorkspace, updateWorkspace } = useWorkspace({})

    const handleFormSubmit = async (e: any) => {
        e.preventDefault()

        const mutation = data ? updateWorkspace : addWorkspace;
        try {
            await mutation.mutateAsync(formData);
            console.log(`Packages ${data ? "updated" : "added"} successfully!`);
            togglePopup();
        } catch (error) {
            console.error(`Error ${data ? "updating" : "adding"} bonus:`, error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="add-works-space-for add-popup-window" >
            <div className="reset-close-btns-responsive" >
                <p>Add Workspace</p>
                <div className="reset-close-btns responsive" >
                    <button style={{ display: "none" }} ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.75489 10.059C5.09537 8.78718 5.76467 7.62737 6.69552 6.69619C7.62636 5.76501 8.78594 5.09529 10.0577 4.75435C11.3294 4.4134 12.6685 4.41326 13.9403 4.75393C15.2121 5.09459 16.3718 5.76407 17.3029 6.69504L19.2059 8.59804H16.0229C15.824 8.59804 15.6332 8.67706 15.4926 8.81771C15.3519 8.95837 15.2729 9.14913 15.2729 9.34804C15.2729 9.54696 15.3519 9.73772 15.4926 9.87838C15.6332 10.019 15.824 10.098 16.0229 10.098H21.0149C21.2138 10.098 21.4046 10.019 21.5452 9.87838C21.6859 9.73772 21.7649 9.54696 21.7649 9.34804V4.35604C21.7649 4.15713 21.6859 3.96637 21.5452 3.82571C21.4046 3.68506 21.2138 3.60604 21.0149 3.60604C20.816 3.60604 20.6252 3.68506 20.4846 3.82571C20.3439 3.96637 20.2649 4.15713 20.2649 4.35604V7.53604L18.3649 5.63604C17.2479 4.5185 15.8563 3.71473 14.3301 3.30555C12.8039 2.89637 11.1969 2.89619 9.67065 3.30505C8.14438 3.71391 6.75265 4.51738 5.63538 5.63469C4.51811 6.752 3.71469 8.14376 3.30589 9.67004C3.28041 9.76525 3.27394 9.86455 3.28683 9.96226C3.29973 10.06 3.33175 10.1542 3.38106 10.2395C3.43036 10.3249 3.496 10.3996 3.57421 10.4596C3.65242 10.5196 3.74168 10.5636 3.83689 10.589C3.9321 10.6145 4.03139 10.621 4.1291 10.6081C4.22681 10.5952 4.32102 10.5632 4.40636 10.5139C4.4917 10.4646 4.56649 10.3989 4.62646 10.3207C4.68643 10.2425 4.73041 10.1533 4.75589 10.058L4.75489 10.059ZM20.1629 13.411C20.0677 13.3855 19.9685 13.3789 19.8708 13.3917C19.7731 13.4045 19.6789 13.4364 19.5936 13.4857C19.5082 13.5349 19.4334 13.6004 19.3734 13.6786C19.3134 13.7567 19.2694 13.8459 19.2439 13.941C18.9034 15.2129 18.2341 16.3727 17.3033 17.3039C16.3724 18.2351 15.2128 18.9048 13.9411 19.2457C12.6694 19.5867 11.3303 19.5868 10.0585 19.2462C8.78665 18.9055 7.62693 18.236 6.69589 17.305L4.79389 15.402H7.97689C8.1758 15.402 8.36656 15.323 8.50722 15.1824C8.64787 15.0417 8.72689 14.851 8.72689 14.652C8.72689 14.4531 8.64787 14.2624 8.50722 14.1217C8.36656 13.9811 8.1758 13.902 7.97689 13.902H2.98389C2.78497 13.902 2.59421 13.9811 2.45356 14.1217C2.3129 14.2624 2.23389 14.4531 2.23389 14.652V19.644C2.23389 19.843 2.3129 20.0337 2.45356 20.1744C2.59421 20.315 2.78497 20.394 2.98389 20.394C3.1828 20.394 3.37356 20.315 3.51422 20.1744C3.65487 20.0337 3.73389 19.843 3.73389 19.644V16.464L5.63389 18.364C6.75098 19.4816 8.14262 20.2853 9.66886 20.6944C11.1951 21.1036 12.8022 21.1036 14.3285 20.6947C15.8547 20.2857 17.2465 19.4821 18.3637 18.3647C19.4809 17.2473 20.2842 15.8554 20.6929 14.329C20.7442 14.137 20.7172 13.9325 20.6178 13.7604C20.5185 13.5882 20.3548 13.4626 20.1629 13.411Z" fill="white" />
                    </svg></button>
                    <button onClick={handleTogglePopup} ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.47007 5.47003C5.6107 5.32958 5.80132 5.25069 6.00007 5.25069C6.19882 5.25069 6.38945 5.32958 6.53007 5.47003L12.0001 10.94L17.4701 5.47003C17.5387 5.39634 17.6215 5.33724 17.7135 5.29625C17.8055 5.25526 17.9048 5.23322 18.0056 5.23144C18.1063 5.22966 18.2063 5.24819 18.2997 5.28591C18.3931 5.32363 18.4779 5.37977 18.5491 5.45099C18.6203 5.52221 18.6765 5.60705 18.7142 5.70043C18.7519 5.79382 18.7704 5.89385 18.7687 5.99455C18.7669 6.09526 18.7448 6.19457 18.7039 6.28657C18.6629 6.37857 18.6038 6.46137 18.5301 6.53003L13.0601 12L18.5301 17.47C18.6038 17.5387 18.6629 17.6215 18.7039 17.7135C18.7448 17.8055 18.7669 17.9048 18.7687 18.0055C18.7704 18.1062 18.7519 18.2062 18.7142 18.2996C18.6765 18.393 18.6203 18.4779 18.5491 18.5491C18.4779 18.6203 18.3931 18.6764 18.2997 18.7142C18.2063 18.7519 18.1063 18.7704 18.0056 18.7686C17.9048 18.7668 17.8055 18.7448 17.7135 18.7038C17.6215 18.6628 17.5387 18.6037 17.4701 18.53L12.0001 13.06L6.53007 18.53C6.3879 18.6625 6.19985 18.7346 6.00555 18.7312C5.81125 18.7278 5.62586 18.6491 5.48845 18.5117C5.35104 18.3742 5.27233 18.1889 5.2689 17.9946C5.26547 17.8003 5.33759 17.6122 5.47007 17.47L10.9401 12L5.47007 6.53003C5.32962 6.38941 5.25073 6.19878 5.25073 6.00003C5.25073 5.80128 5.32962 5.61066 5.47007 5.47003Z" fill="#1E1F24" />
                    </svg></button>
                </div>
            </div>

            <div className="add-works-space-form-head">
                <div className="add-works-space-form-controller">
                    <SearchInput onSearchChange={() => console.log("object")} />
                </div>
                <div className="reset-close-btns">
                    <button style={{ display: "none" }} >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.75489 10.059C5.09537 8.78718 5.76467 7.62737 6.69552 6.69619C7.62636 5.76501 8.78594 5.09529 10.0577 4.75435C11.3294 4.4134 12.6685 4.41326 13.9403 4.75393C15.2121 5.09459 16.3718 5.76407 17.3029 6.69504L19.2059 8.59804H16.0229C15.824 8.59804 15.6332 8.67706 15.4926 8.81771C15.3519 8.95837 15.2729 9.14913 15.2729 9.34804C15.2729 9.54696 15.3519 9.73772 15.4926 9.87838C15.6332 10.019 15.824 10.098 16.0229 10.098H21.0149C21.2138 10.098 21.4046 10.019 21.5452 9.87838C21.6859 9.73772 21.7649 9.54696 21.7649 9.34804V4.35604C21.7649 4.15713 21.6859 3.96637 21.5452 3.82571C21.4046 3.68506 21.2138 3.60604 21.0149 3.60604C20.816 3.60604 20.6252 3.68506 20.4846 3.82571C20.3439 3.96637 20.2649 4.15713 20.2649 4.35604V7.53604L18.3649 5.63604C17.2479 4.5185 15.8563 3.71473 14.3301 3.30555C12.8039 2.89637 11.1969 2.89619 9.67065 3.30505C8.14438 3.71391 6.75265 4.51738 5.63538 5.63469C4.51811 6.752 3.71469 8.14376 3.30589 9.67004C3.28041 9.76525 3.27394 9.86455 3.28683 9.96226C3.29973 10.06 3.33175 10.1542 3.38106 10.2395C3.43036 10.3249 3.496 10.3996 3.57421 10.4596C3.65242 10.5196 3.74168 10.5636 3.83689 10.589C3.9321 10.6145 4.03139 10.621 4.1291 10.6081C4.22681 10.5952 4.32102 10.5632 4.40636 10.5139C4.4917 10.4646 4.56649 10.3989 4.62646 10.3207C4.68643 10.2425 4.73041 10.1533 4.75589 10.058L4.75489 10.059ZM20.1629 13.411C20.0677 13.3855 19.9685 13.3789 19.8708 13.3917C19.7731 13.4045 19.6789 13.4364 19.5936 13.4857C19.5082 13.5349 19.4334 13.6004 19.3734 13.6786C19.3134 13.7567 19.2694 13.8459 19.2439 13.941C18.9034 15.2129 18.2341 16.3727 17.3033 17.3039C16.3724 18.2351 15.2128 18.9048 13.9411 19.2457C12.6694 19.5867 11.3303 19.5868 10.0585 19.2462C8.78665 18.9055 7.62693 18.236 6.69589 17.305L4.79389 15.402H7.97689C8.1758 15.402 8.36656 15.323 8.50722 15.1824C8.64787 15.0417 8.72689 14.851 8.72689 14.652C8.72689 14.4531 8.64787 14.2624 8.50722 14.1217C8.36656 13.9811 8.1758 13.902 7.97689 13.902H2.98389C2.78497 13.902 2.59421 13.9811 2.45356 14.1217C2.3129 14.2624 2.23389 14.4531 2.23389 14.652V19.644C2.23389 19.843 2.3129 20.0337 2.45356 20.1744C2.59421 20.315 2.78497 20.394 2.98389 20.394C3.1828 20.394 3.37356 20.315 3.51422 20.1744C3.65487 20.0337 3.73389 19.843 3.73389 19.644V16.464L5.63389 18.364C6.75098 19.4816 8.14262 20.2853 9.66886 20.6944C11.1951 21.1036 12.8022 21.1036 14.3285 20.6947C15.8547 20.2857 17.2465 19.4821 18.3637 18.3647C19.4809 17.2473 20.2842 15.8554 20.6929 14.329C20.7442 14.137 20.7172 13.9325 20.6178 13.7604C20.5185 13.5882 20.3548 13.4626 20.1629 13.411Z" fill="white" />
                            </svg>
                        </svg>
                    </button>
                    <button onClick={handleTogglePopup}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.47007 5.47003C5.6107 5.32958 5.80132 5.25069 6.00007 5.25069C6.19882 5.25069 6.38945 5.32958 6.53007 5.47003L12.0001 10.94L17.4701 5.47003C17.5387 5.39634 17.6215 5.33724 17.7135 5.29625C17.8055 5.25526 17.9048 5.23322 18.0056 5.23144C18.1063 5.22966 18.2063 5.24819 18.2997 5.28591C18.3931 5.32363 18.4779 5.37977 18.5491 5.45099C18.6203 5.52221 18.6765 5.60705 18.7142 5.70043C18.7519 5.79382 18.7704 5.89385 18.7687 5.99455C18.7669 6.09526 18.7448 6.19457 18.7039 6.28657C18.6629 6.37857 18.6038 6.46137 18.5301 6.53003L13.0601 12L18.5301 17.47C18.6038 17.5387 18.6629 17.6215 18.7039 17.7135C18.7448 17.8055 18.7669 17.9048 18.7687 18.0055C18.7704 18.1062 18.7519 18.2062 18.7142 18.2996C18.6765 18.393 18.6203 18.4779 18.5491 18.5491C18.4779 18.6203 18.3931 18.6764 18.2997 18.7142C18.2063 18.7519 18.1063 18.7704 18.0056 18.7686C17.9048 18.7668 17.8055 18.7448 17.7135 18.7038C17.6215 18.6628 17.5387 18.6037 17.4701 18.53L12.0001 13.06L6.53007 18.53C6.3879 18.6625 6.19985 18.7346 6.00555 18.7312C5.81125 18.7278 5.62586 18.6491 5.48845 18.5117C5.35104 18.3742 5.27233 18.1889 5.2689 17.9946C5.26547 17.8003 5.33759 17.6122 5.47007 17.47L10.9401 12L5.47007 6.53003C5.32962 6.38941 5.25073 6.19878 5.25073 6.00003C5.25073 5.80128 5.32962 5.61066 5.47007 5.47003Z" fill="#1E1F24" />
                        </svg>
                    </button>
                </div>
            </div>

            <div style={{ marginBottom: "8px" }} >
                <input style={{ outline: "none" }} type="text" placeholder="Enter Workspace Name" />
            </div>
            <div className="confiq-accordion-wrapper">
                {formData?.products?.map((item: any, index: number) => {
                    return (
                        <div className="confiq-accordion-settings" key={index}>
                            <div className="confiq-accordion-settings-title">
                                <p>{item.title}</p>
                            </div>

                            <div
                                className="confiq-accordion-settings-form"
                                style={{ padding: "16px 16px" }}
                            >
                                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                    {item?.access?.map((settings: any, i: number) => {
                                        return (
                                            <div key={i} className="checkbox-inputs-wrapper">
                                                <div className="checkbox-input packages-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        name=""
                                                        id=""
                                                        checked={settings.isEnable}
                                                        onChange={(e) =>
                                                            handleInputChange(e, item.id, settings.name)
                                                        }
                                                    />
                                                    <p>{settings.name}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* {accordian_settings.map((item, index) => (
                    <ConfiqAccordion
                        key={index}
                        data={data}
                        item={item}
                    />
                ))} */}
            </div>

            <div className="add-user-form-button" >
                <PrimaryButton type="submit" title="Submit" />
            </div>
        </form>
    )
}

export default AddWorksSpaceForm