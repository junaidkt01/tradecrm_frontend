import { useNavigate } from "react-router-dom";
import "./Widget.css"

const AccountWalletWidget = ({ title, url }: { title: string; url: string; }) => {
    const navigate = useNavigate()
    return (
        <div className={`account-wallet-widget`} onClick={() => navigate(url)} >
            <div className={`title-section`} >
                <p>{title}</p>
                <div>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.25 1L19 4.75L15.25 1ZM19 4.75L15.25 8.5L19 4.75ZM19 4.75H1H19Z" fill="white" />
                        <path d="M15.25 1L19 4.75M19 4.75L15.25 8.5M19 4.75H1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="content-section-wrapper" >
                <div className="content-section">
                    <p className="title" >Total Deposite</p>

                    <div className="amount-section">
                        <div className="widget-amount-icon"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.90244 5.76829V15.4268M7.48781 13.1587L8.19529 13.6891C9.13781 14.3966 10.6663 14.3966 11.6096 13.6891C12.5529 12.9816 12.5529 11.8355 11.6096 11.128C11.1387 10.7738 10.5206 10.5976 9.90244 10.5976C9.3189 10.5976 8.73537 10.4205 8.29027 10.0671C7.40008 9.35966 7.40008 8.21351 8.29027 7.50603C9.18047 6.79854 10.6244 6.79854 11.5146 7.50603L11.8486 7.77164M17.1463 10.5976C17.1463 11.5488 16.959 12.4908 16.5949 13.3697C16.2309 14.2486 15.6973 15.0471 15.0247 15.7198C14.352 16.3924 13.5534 16.926 12.6746 17.2901C11.7957 17.6541 10.8537 17.8415 9.90244 17.8415C8.95116 17.8415 8.00919 17.6541 7.13032 17.2901C6.25145 16.926 5.45289 16.3924 4.78023 15.7198C4.10757 15.0471 3.57399 14.2486 3.20995 13.3697C2.84591 12.4908 2.65854 11.5488 2.65854 10.5976C2.65854 8.67636 3.42173 6.83385 4.78023 5.47535C6.13872 4.11686 7.98124 3.35366 9.90244 3.35366C11.8236 3.35366 13.6662 4.11686 15.0247 5.47535C16.3831 6.83385 17.1463 8.67636 17.1463 10.5976Z" stroke="#FEC53D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div className="widget-amounts" >
                            <p>$9637990</p>
                            <span><p>$990</p><p>today</p></span>
                        </div>
                    </div>
                </div>
                <div className="content-section">
                    <p className="title" >Total Deposite</p>

                    <div className="amount-section">
                        <div className="widget-amount-icon"><svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.90244 5.76829V15.4268M7.48781 13.1587L8.19529 13.6891C9.13781 14.3966 10.6663 14.3966 11.6096 13.6891C12.5529 12.9816 12.5529 11.8355 11.6096 11.128C11.1387 10.7738 10.5206 10.5976 9.90244 10.5976C9.3189 10.5976 8.73537 10.4205 8.29027 10.0671C7.40008 9.35966 7.40008 8.21351 8.29027 7.50603C9.18047 6.79854 10.6244 6.79854 11.5146 7.50603L11.8486 7.77164M17.1463 10.5976C17.1463 11.5488 16.959 12.4908 16.5949 13.3697C16.2309 14.2486 15.6973 15.0471 15.0247 15.7198C14.352 16.3924 13.5534 16.926 12.6746 17.2901C11.7957 17.6541 10.8537 17.8415 9.90244 17.8415C8.95116 17.8415 8.00919 17.6541 7.13032 17.2901C6.25145 16.926 5.45289 16.3924 4.78023 15.7198C4.10757 15.0471 3.57399 14.2486 3.20995 13.3697C2.84591 12.4908 2.65854 11.5488 2.65854 10.5976C2.65854 8.67636 3.42173 6.83385 4.78023 5.47535C6.13872 4.11686 7.98124 3.35366 9.90244 3.35366C11.8236 3.35366 13.6662 4.11686 15.0247 5.47535C16.3831 6.83385 17.1463 8.67636 17.1463 10.5976Z" stroke="#FEC53D" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                        <div className="widget-amounts" >
                            <p className="widget-amount" >$9999990</p>
                            <span ><p>$9999990</p><p>today</p></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountWalletWidget
