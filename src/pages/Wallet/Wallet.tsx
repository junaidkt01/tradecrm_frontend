import { useState } from "react"
import SearchInput from "../../components/SeachInputs/SearchInput"
import SelectOptions from "../../components/SelectOptions/SelectOptions"
import FilterBtn from "../Users/_components/FilterBtn"
import { WalletLedgerTable, WalletProfileTable, WalletTransferTable } from "../../components/WalletTable/WalletTable"
import { WalletLedger, WalletProfileData, WalletTransferData } from "../../utils/walletTable"
import "./Wallet.css"
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs"

const Wallet = () => {
    const [walletTable, setWalletTable] = useState("ledger");


    const filter_by_status = {
        default_value: "Filter By Status",
        options: [
            { value: "Pending", label: "pending" },
            { value: "Approved", label: "approved" },
            { value: "Suspended", label: "suspended" },
        ]
    }

    const search_by = {
        default_value: "Search By",
        options: [
            { value: "name", label: "Name" },
            { value: "email", label: "Email" },
        ]
    }

    return (
        <div className="wallet-page pages-wrapper" >
            <Breadcrumbs title="Finance / Wallet" />
            <div className="wallet-page-top" style={{ display: "grid" }} >
                <div className="wallet-head-section" >
                    <div style={{ display: "flex", alignItems: "center", gap: "13px" }} >
                        <SearchInput />
                        <SelectOptions data={search_by} />
                    </div>
                    <div>
                        <div className="export-add-users-btns">
                            <button>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.5 14.25V11.625C19.5 10.7299 19.1444 9.87145 18.5115 9.23851C17.8786 8.60558 17.0201 8.25 16.125 8.25H14.625C14.3266 8.25 14.0405 8.13147 13.8295 7.9205C13.6185 7.70952 13.5 7.42337 13.5 7.125V5.625C13.5 4.72989 13.1444 3.87145 12.5115 3.23851C11.8785 2.60558 11.0201 2.25 10.125 2.25H8.25M10.5 2.25H5.625C5.004 2.25 4.5 2.754 4.5 3.375V20.625C4.5 21.246 5.004 21.75 5.625 21.75H18.375C18.996 21.75 19.5 21.246 19.5 20.625V11.25C19.5 8.86305 18.5518 6.57387 16.864 4.88604C15.1761 3.19821 12.8869 2.25 10.5 2.25Z" stroke="#1E1F24" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span>Export to Excel</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="ledger-profile-wallet-transfer-btns" >
                    <button onClick={() => setWalletTable("ledger")} className={walletTable === "ledger" ? "active" : ""} >Ledger</button>
                    <button onClick={() => setWalletTable("profile")} className={walletTable === "profile" ? "active" : ""} >Profile</button>
                    <button onClick={() => setWalletTable("wallet_transfer")} className={walletTable === "wallet_transfer" ? "active" : ""} >Wallet Transfer</button>
                </div>
            </div>

            <div className="wallet-page-table" >
                {walletTable === "wallet_transfer" && <div style={{ display: "flex", gap: "16px" }} >
                    <FilterBtn title="Request" isActive />
                    <FilterBtn title="Report" />
                </div>}
                <div className="status-selection-btn" >
                    <SelectOptions data={filter_by_status} />
                </div>
                {
                    walletTable === "ledger" && <WalletLedgerTable tableData={WalletLedger} />
                }
                {
                    walletTable === "profile" && <WalletProfileTable tableData={WalletProfileData} />
                }
                {
                    walletTable === "wallet_transfer" && <WalletTransferTable tableData={WalletTransferData} />
                }
            </div>
        </div>
    )
}

export default Wallet
