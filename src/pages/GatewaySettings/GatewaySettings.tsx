import { useState } from "react";
import FilterBtn from "../Users/_components/FilterBtn"
import GatewayForm from "./_components/GatewayForm"
import "./GatewaySettings.css"
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs";
const GatewaySettings = () => {

    const [activeForm, setActiveForm] = useState(null);

    const toggleForm = (formName: any) => {
        if (activeForm === formName) {
            setActiveForm(null);
        } else {
            setActiveForm(formName);
        }
    };

    return (
        <div className="gateway-settings pages-wrapper" >
            <Breadcrumbs title="Finance / Gateway Setting" />
            <div className="auto-manuel-btns">
                <FilterBtn title="auto" isActive />
                <FilterBtn title="manuel" />
            </div>
            <div className="payment-gateways" >
                <GatewayForm
                    isOpen={activeForm === 'razorpay'}
                    toggleForm={() => toggleForm('razorpay')}
                    title="Razorpay"
                />
                <GatewayForm
                    isOpen={activeForm === 'stripe'}
                    toggleForm={() => toggleForm('stripe')}
                    title="Stripe"
                />
                <GatewayForm
                    isOpen={activeForm === 'paypal'}
                    toggleForm={() => toggleForm('paypal')}
                    title="PayPal"
                />
                <GatewayForm
                    isOpen={activeForm === 'webmoney'}
                    toggleForm={() => toggleForm('webmoney')}
                    title="WebMoney"
                />
            </div>
        </div>
    )
}

export default GatewaySettings
