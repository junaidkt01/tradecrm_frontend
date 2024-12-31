import { WalletLedgerType, WalletProfileDataType, WalletTransferDataType } from "../../utils/walletTable"
import "./WalletTable.css"

export const WalletLedgerTable = ({ tableData }: { tableData: WalletLedgerType }) => {
    return (
        <div className="wallet-table">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Reference</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>USD($)</th>
                        <th>Source</th>
                        <th>Status</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map((item, i) => <tr key={i} >
                            <td>{item.timestamp}</td>
                            <td>{item.reference}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.usd}</td>
                            <td>{item.source}</td>
                            <td>{item.status}</td>
                            <td>
                                <div style={{ display: "flex", gap: "8px" }} >

                                    {
                                        item.remark.map((item, i) => <div key={i} dangerouslySetInnerHTML={{ __html: item }} />)
                                    }
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div >
    )
}

export const WalletProfileTable = ({ tableData }: { tableData: WalletProfileDataType }) => {
    return (
        <div className="wallet-table">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map((item, i) => <tr key={i} >
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.balance}</td>
                            <td dangerouslySetInnerHTML={{ __html: item.action }} />
                        </tr>)
                    }
                </tbody>
            </table>

        </div >
    )
}

export const WalletTransferTable = ({ tableData }: { tableData: WalletTransferDataType }) => {
    return (
        <div className="wallet-table">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Sender</th>
                        <th>Recipient</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map((item, i) => <tr key={i} >
                            <td>{item.timestamp}</td>
                            <td>{item.sender}</td>
                            <td>{item.recipient}</td>
                            <td>{item.amount}</td>
                            <td>{item.status}</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </div >
    )
}