import { InternalTransactionType, TransactionType } from "../../utils/financeTable"
import StatusSelector from "../Buttons/StatusSelector/StatusSelector"
import "./FinanceTable.css"

export const TransactionTable = ({ tableData }: { tableData?: TransactionType }) => {
    return (
        <div className="finance-table">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Account</th>
                        <th>First</th>
                        <th>Email ID</th>
                        <th>Balance</th>
                        <th>Equity</th>
                        <th>Leverage</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map((item, i) => <tr key={i} >
                            <td>{item.account}</td>
                            <td>{item.first}</td>
                            <td>{item.email}</td>
                            <td>{item.balance}</td>
                            <td>{item.equity}</td>
                            <td>{item.leverage}</td>
                            <td dangerouslySetInnerHTML={{ __html: item.action }} />
                        </tr>)
                    }
                </tbody>
            </table>

        </div >
    )
}

export const InternalTransactionTableRequest = ({ tableData }: { tableData?: InternalTransactionType }) => {
    return (
        <div className="finance-table">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Sender Account</th>
                        <th>Recipient Account</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map((item, i) => <tr key={i} >
                            <td>{item.timestamp}</td>
                            <td>{item.sender_account}</td>
                            <td>{item.recipient_account}</td>
                            <td>{item.amount}</td>
                            <td>
                                <StatusSelector status={item.status} />
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export const InternalTransactionTableReport = ({ tableData }: { tableData?: InternalTransactionType }) => {
    return (
        <div className="finance-table">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Sender Account</th>
                        <th>Recipient Account</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData?.map((item, i) => <tr key={i} >
                            <td>{item.timestamp}</td>
                            <td>{item.sender_account}</td>
                            <td>{item.recipient_account}</td>
                            <td>{item.amount}</td>
                            <td>
                                {item.status === "approved" && <div style={{ border: "1px solid #009800", padding: "6px 16px", color: "#009800", borderRadius: "33px", textTransform: "capitalize", textAlign: "center" }} >
                                    {item.status}
                                </div>}
                                {item.status === "rejected" && <div style={{ border: "1px solid #FF3333", padding: "6px 16px", color: "#FF3333", borderRadius: "33px", textTransform: "capitalize", textAlign: "center" }} >
                                    {item.status}
                                </div>}
                                {item.status === "pending" && <div style={{ border: "1px solid #FF7900", padding: "6px 16px", color: "#FF7900", borderRadius: "33px", textTransform: "capitalize", textAlign: "center" }} >
                                    {item.status}
                                </div>}
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}