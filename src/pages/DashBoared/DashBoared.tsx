import BarChart from "../../components/Charts/BarChart/BarChart"
// import { SuccessToast } from "../../components/ToastMessage/ToastMessage"
import AccountWalletWidget from "../../components/Widgets/AccountWalletWidget"
import Widget from "../../components/Widgets/Widget"

const DashBoared = () => {

  return (
    <div className="dashboard-page-wrapper" >
      <div className="dashboard-widgets" >
        {/* <AccountWalletWidget title="Wallet" url="/finance/wallet" />
        <AccountWalletWidget title="Account" url="/finance/account" /> */}
        <AccountWalletWidget title="Wallet" url="" />
        <AccountWalletWidget title="Account" url="" />
        <Widget title="Traded" url="" />
        <Widget title="Users" url="" />
        <Widget title="IB" url="" />
      </div>
      <div className="dashboard-page pages-wrapper" >
        <div style={{ display: "flex" }} >
          <BarChart />
        </div>
      </div>

      {/* <div className="overlay"></div>
      <SuccessToast /> */}
    </div>
  )
}

export default DashBoared
