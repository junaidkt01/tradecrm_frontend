import "./Finance.css"
import "../Executives/Executives.css"
import { internalTransaction, transaction } from "../../utils/financeTable";
import { InternalTransactionTableReport, InternalTransactionTableRequest, TransactionTable } from "../../components/FinanceTable/FinanceTable";
import { useState } from "react";
import FilterBtn from "../Users/_components/FilterBtn";
import SearchInput from "../../components/SeachInputs/SearchInput";
import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs";

const Finance = () => {
    const [transactionTable, setTransactionTable] = useState("transaction");

    return (
        <div className="finance-page pages-wrapper" >
            <Breadcrumbs title="Finance / Account" />
            <div className="finance-table-btn" >
                <div className="finance-head-section" >
                    <div>
                        <SearchInput />
                    </div>
                    <div style={{ display: "flex", gap: "16px", marginBottom: "16px" }} >
                        <FilterBtn onClick={() => setTransactionTable("transaction")} title="Transaction" isActive={transactionTable === "transaction"} />
                        <FilterBtn onClick={() => setTransactionTable("internal_transaction_request")} title="Internal Transaction" isActive={transactionTable === "internal_transaction"} />
                    </div>
                </div>
                {(transactionTable === "internal_transaction_request" || transactionTable === "internal_transaction_report") && <div className="request-report" >
                    <button onClick={() => setTransactionTable("internal_transaction_request")} >Request</button>
                    <button onClick={() => setTransactionTable("internal_transaction_report")} >Report</button>
                </div>}
            </div>
            {
                transactionTable === "transaction" && (
                    <TransactionTable tableData={transaction} />
                )
            }
            {
                transactionTable === "internal_transaction_request" && (
                    <InternalTransactionTableRequest tableData={internalTransaction} />
                )
            }
            {
                transactionTable === "internal_transaction_report" && (
                    <InternalTransactionTableReport tableData={internalTransaction} />
                )
            }
        </div>
    )
}

export default Finance

// <div>
//     <div className="table-control-btns" >
//         <div className="executives-filter-btns" >
//             <FilterBtn onClick={() => setTransactionTable("transaction")} title="Transaction" isActive={transactionTable === "transaction"} />
//             <FilterBtn onClick={() => setTransactionTable("internal_transaction")} title="Internal Transaction" isActive={transactionTable === "internal_transaction"} />
//         </div>
//         <div className="add-executives-btns">
//             <SearchInput />
//         </div>
//     </div>
// </div>