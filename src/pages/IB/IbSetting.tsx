import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs"
import CommissionSettingsCard from "./_components/CommissionSettingsCard"
import "./IB.css"

const IbSetting = () => {
    return (
        <div className="ib-setting pages-wrapper" >
            <Breadcrumbs title="IB / Settings" />
            <div className="table-control-btns">
                <form className="create-ib-commission" >
                    <div>
                        <label htmlFor="">Start Date</label>
                        <input type="date" name="" id="" placeholder="Select Date" />
                    </div>
                    <div>
                        <label htmlFor="">Start Date</label>
                        <input type="date" name="" id="" />
                    </div>
                    <div>
                        <label htmlFor="">Start Date</label>
                        <input type="number" name="" id="" />
                    </div>
                    <button>submit</button>
                </form>
            </div>
            <div className="commission-settings-cards">
                <CommissionSettingsCard />
                <CommissionSettingsCard />
                <CommissionSettingsCard />
                <CommissionSettingsCard />
                <CommissionSettingsCard />
            </div>
        </div>
    )
}

export default IbSetting
