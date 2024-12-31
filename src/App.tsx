import { useEffect, useState } from 'react';
import { base_url } from './base_url';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header';
import Users from './pages/Users/Users';
import Settings from './pages/Settings/Settings';
import DashBoared from './pages/DashBoared/DashBoared';
import Executives from './pages/Executives/Executives';
import Configuration from './pages/Configuration/Configuration';
import SideBarMenu from './components/SideBarMenu/SideBarMenu';
import Packages from './pages/Configuration/Packages';
import Bonus from './pages/Configuration/Bonus';
import Manager from './pages/Configuration/Manager';
import Finance from './pages/Finance/Finance';
import Wallet from './pages/Wallet/Wallet';
import GatewaySettings from './pages/GatewaySettings/GatewaySettings';
import Permission from './pages/Permission/Permission';
import Voucher from './pages/Coupon/Voucher';
import SharingPlan from './pages/IB/SharingPlan';
import IbSetting from './pages/IB/IbSetting';
import IbAndSubIb from './pages/IB/IbAndSubIb';
import CommissionPackage from './pages/IB/CommissionPackage';
import Commission from './pages/IB/Commission';
import OpenTickets from './pages/Tickets/OpenTickets';
import CloseTickets from './pages/Tickets/CloseTickets';
import Messages from './pages/Messages/Messages';
import AuthPage from './pages/AuthPage/AuthPage';
import KYCForm from './KYCForm';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate(base_url);
    scrollTo(0, 0)
  };

  useEffect(() => {
    if (localStorage.getItem("local_token")) {
      setIsLoggedIn(true);
    }
  }, [])

  return (
    <div className='App' >
      {isLoggedIn && <SideBarMenu />}
      <div className="main" >
        {isLoggedIn && <Header />}
        <div className="pages">
          <Routes >
            {
              !isLoggedIn ? (
                <Route path="*" element={<AuthPage onLogin={handleLogin} />} />
              ) :
                (
                  <>
                    <Route path={`${base_url}/`} element={<DashBoared />} />
                    <Route path={`${base_url}/users`} element={<Users />} />
                    <Route path={`${base_url}/settings`} element={<Settings />} />
                    <Route path={`${base_url}/executives/executives`} element={<Executives />} />
                    <Route path={`${base_url}/executives/permission`} element={<Permission />} />
                    <Route path={`${base_url}/configuration/workspace`} element={<Configuration />} />
                    <Route path={`${base_url}/configuration/packages`} element={<Packages />} />
                    <Route path={`${base_url}/configuration/bonus`} element={<Bonus />} />
                    <Route path={`${base_url}/configuration/manager`} element={<Manager />} />
                    <Route path={`${base_url}/finance/account`} element={<Finance />} />
                    <Route path={`${base_url}/finance/wallet`} element={<Wallet />} />
                    <Route path={`${base_url}/finance/gateway-setting`} element={<GatewaySettings />} />
                    <Route path={`${base_url}/coupon/voucher`} element={<Voucher />} />
                    <Route path={`${base_url}/ib/sharing-plan`} element={<SharingPlan />} />
                    <Route path={`${base_url}/ib/settings`} element={<IbSetting />} />
                    <Route path={`${base_url}/ib/ib-and-subib`} element={<IbAndSubIb />} />
                    <Route path={`${base_url}/ib/commission-package`} element={<CommissionPackage />} />
                    <Route path={`${base_url}/ib/commission`} element={<Commission />} />
                    <Route path={`${base_url}/tickets/open-tickets`} element={<OpenTickets />} />
                    <Route path={`${base_url}/tickets/close-tickets`} element={<CloseTickets />} />
                    <Route path={`${base_url}/messages`} element={<Messages />} />
                    <Route path={`${base_url}/documents`} element={<KYCForm />} />
                  </>
                )
            }
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;