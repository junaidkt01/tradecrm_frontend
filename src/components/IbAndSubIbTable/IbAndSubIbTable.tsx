import React, { useState } from "react";
import { CommissionPackageType, IBcomisnOvrlType, IBComisnTrnsctnType, IBdlyComisnType } from "../../utils/IbAndSubIbTable";
import "./IbAndSubIbTable.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

{/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 15L12 18.75L15.75 15M8.25 9L12 5.25L15.75 9" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>  */}

const IbAndSubIbTable = ({ data, isLoading }: { data: any, isLoading: boolean }) => {
    const [expandedRows, setExpandedRows] = useState<number[]>([]);

    const toggleRow = (id: number) => {
        setExpandedRows(prev => prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]);
    };

    const renderRows = (data: any, level = 0) => data.map((row: any) => (
        <React.Fragment key={row.id}>
            <tr className={level > 0 ? 'sub-row' : ''}>
                <td className={`toggle-cell ${level > 0 ? 'sub-level' : ''}`}>
                    {row.subIb?.length > 0 && (
                        <svg onClick={() => toggleRow(row.id)} style={{ cursor: "pointer" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {expandedRows.includes(row.id) ?
                                <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 12, 12)" />
                                :
                                <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            }
                        </svg>
                    )}
                </td>
                {['name', 'email', 'commission_plan', 'create_at'].map((key) => (
                    <td key={key} className={`data-cell ${level > 0 ? 'sub-level' : ''}`} style={{ paddingLeft: `${level * 20}px` }}>
                        {key === 'create_at' && level > 0 ? '' : row[key] || "N/A"}
                    </td>
                ))}
                {level === 0 && <td className="settings-cell">
                    <svg style={{ cursor: "pointer" }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.59402 1.94C7.68402 1.398 8.15402 1 8.70402 1H11.297C11.847 1 12.317 1.398 12.407 1.94L12.62 3.221C12.683 3.595 12.933 3.907 13.265 4.091C13.339 4.131 13.412 4.174 13.485 4.218C13.81 4.414 14.205 4.475 14.56 4.342L15.777 3.886C16.0264 3.79221 16.301 3.78998 16.5519 3.87971C16.8028 3.96945 17.0137 4.14531 17.147 4.376L18.443 6.623C18.5761 6.8537 18.623 7.12413 18.5754 7.38617C18.5278 7.6482 18.3887 7.88485 18.183 8.054L17.18 8.881C16.887 9.122 16.742 9.494 16.75 9.873C16.7514 9.95799 16.7514 10.043 16.75 10.128C16.742 10.506 16.887 10.878 17.18 11.119L18.184 11.946C18.608 12.296 18.718 12.901 18.444 13.376L17.146 15.623C17.0129 15.8536 16.8022 16.0296 16.5515 16.1195C16.3009 16.2094 16.0264 16.2074 15.777 16.114L14.56 15.658C14.205 15.525 13.81 15.586 13.484 15.782C13.4115 15.8261 13.3382 15.8688 13.264 15.91C12.933 16.093 12.683 16.405 12.62 16.779L12.407 18.06C12.317 18.603 11.847 19 11.297 19H8.70302C8.15302 19 7.68402 18.602 7.59302 18.06L7.38002 16.779C7.31802 16.405 7.06802 16.093 6.73602 15.909C6.66187 15.8681 6.58852 15.8258 6.51602 15.782C6.19102 15.586 5.79602 15.525 5.44002 15.658L4.22302 16.114C3.97375 16.2075 3.69939 16.2096 3.44872 16.1199C3.19806 16.0302 2.98733 15.8545 2.85402 15.624L1.55702 13.377C1.42397 13.1463 1.37707 12.8759 1.42468 12.6138C1.47229 12.3518 1.61131 12.1152 1.81702 11.946L2.82102 11.119C3.11302 10.879 3.25802 10.506 3.25102 10.128C3.24946 10.043 3.24946 9.95799 3.25102 9.873C3.25802 9.493 3.11302 9.122 2.82102 8.881L1.81702 8.054C1.61156 7.88489 1.4727 7.64843 1.42509 7.38662C1.37749 7.12481 1.42424 6.8546 1.55702 6.624L2.85402 4.377C2.98721 4.14614 3.19803 3.97006 3.44894 3.88014C3.69984 3.79021 3.97451 3.79229 4.22402 3.886L5.44002 4.342C5.79602 4.475 6.19102 4.414 6.51602 4.218C6.68802 4.174 6.66202 4.132 6.73602 4.09C7.06802 3.907 7.31802 3.595 7.38002 3.221L7.59402 1.94Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </td>}
            </tr>
            {expandedRows.includes(row.id) && row.subIb && (
                <>
                    <tr className="sub-table-head">
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Commission Plan</th>
                        <th>Business</th>
                        <th></th>
                    </tr>
                    {renderRows(row.subIb, level + 1)}
                </>
            )}
        </React.Fragment>
    ));

    return (
        <div className="table-component">
            <table className="styled-table">
                <thead>
                    <tr>
                        <th></th><th>Name</th><th>Email</th><th>Commission Plan</th><th>Timestamp</th><th>Settings</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? Array.from({ length: 10 }).map((_, i) => (
                        <tr key={i}>
                            <td><Skeleton /></td><td><Skeleton /></td><td><Skeleton /></td><td><Skeleton /></td><td><Skeleton /></td><td><Skeleton width={30} /></td>
                        </tr>
                    )) : data.length === 0 ? null : renderRows(data)}
                </tbody>
            </table>
        </div>
    );
};

export default IbAndSubIbTable;


// const IbAndSubIbTable = ({ data, isLoading }: { data: any, isLoading: boolean }) => {
//     const [expandedRows, setExpandedRows] = useState<any>([]);

//     const toggleRow = (id: number) => {
//         setExpandedRows((prev: any) =>
//             prev.includes(id) ? prev.filter((rowId: number) => rowId !== id) : [...prev, id]
//         );
//     };

//     const renderRows = (data: any, level = 0) => {
//         return data.map((row: any) => (
//             <React.Fragment key={row.id}>
//                 {/* Parent Row */}
//                 <tr
//                     className={`${level > 0 ? 'sub-row' : ''}`}
//                     style={{
//                         backgroundColor: level > 0 ? '#f9f9f9' : 'white',
//                         borderLeft: level > 0 ? '4px solid #e0e0e0' : 'none'
//                     }}
//                 >
//                     <td style={{ textAlign: "center", paddingLeft: `${level * 20}px` }} >
//                         {row.subIb && row.subIb.length > 0 && (
//                             <svg onClick={() => toggleRow(row.id)} style={{ cursor: "pointer" }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 {expandedRows.includes(row.id) ?
//                                     <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="rotate(90 12, 12)" />
//                                     :
//                                     <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//                                 }
//                             </svg>
//                         )}
//                     </td>
//                     <td style={{
//                         paddingLeft: `${level * 20}px`,
//                         fontWeight: level > 0 ? 300 : 500,
//                         color: level > 0 ? '#666' : 'var(--black)'
//                     }}>{row.name}</td>
//                     <td style={{
//                         paddingLeft: `${level * 20}px`,
//                         fontWeight: level > 0 ? 300 : 500,
//                         color: level > 0 ? '#666' : 'var(--black)'
//                     }}>{row.email}</td>
//                     <td style={{
//                         paddingLeft: `${level * 20}px`,
//                         fontWeight: level > 0 ? 300 : 500,
//                         color: level > 0 ? '#666' : 'var(--black)'
//                     }}>{row.commission_plan || "N/A"}</td>
//                     <td style={{
//                         paddingLeft: `${level * 20}px`,
//                         fontWeight: level > 0 ? 300 : 500,
//                         color: level > 0 ? '#666' : 'var(--black)'
//                     }}>{level <= 0 ? row.create_at : ""}</td>
//                     {level <= 0 ? <td style={{
//                         paddingLeft: `${level * 20}px`,
//                         textAlign: "center",
//                         opacity: level > 0 ? 0.7 : 1
//                     }} >
// <svg style={{ cursor: "pointer" }} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M7.59402 1.94C7.68402 1.398 8.15402 1 8.70402 1H11.297C11.847 1 12.317 1.398 12.407 1.94L12.62 3.221C12.683 3.595 12.933 3.907 13.265 4.091C13.339 4.131 13.412 4.174 13.485 4.218C13.81 4.414 14.205 4.475 14.56 4.342L15.777 3.886C16.0264 3.79221 16.301 3.78998 16.5519 3.87971C16.8028 3.96945 17.0137 4.14531 17.147 4.376L18.443 6.623C18.5761 6.8537 18.623 7.12413 18.5754 7.38617C18.5278 7.6482 18.3887 7.88485 18.183 8.054L17.18 8.881C16.887 9.122 16.742 9.494 16.75 9.873C16.7514 9.95799 16.7514 10.043 16.75 10.128C16.742 10.506 16.887 10.878 17.18 11.119L18.184 11.946C18.608 12.296 18.718 12.901 18.444 13.376L17.146 15.623C17.0129 15.8536 16.8022 16.0296 16.5515 16.1195C16.3009 16.2094 16.0264 16.2074 15.777 16.114L14.56 15.658C14.205 15.525 13.81 15.586 13.484 15.782C13.4115 15.8261 13.3382 15.8688 13.264 15.91C12.933 16.093 12.683 16.405 12.62 16.779L12.407 18.06C12.317 18.603 11.847 19 11.297 19H8.70302C8.15302 19 7.68402 18.602 7.59302 18.06L7.38002 16.779C7.31802 16.405 7.06802 16.093 6.73602 15.909C6.66187 15.8681 6.58852 15.8258 6.51602 15.782C6.19102 15.586 5.79602 15.525 5.44002 15.658L4.22302 16.114C3.97375 16.2075 3.69939 16.2096 3.44872 16.1199C3.19806 16.0302 2.98733 15.8545 2.85402 15.624L1.55702 13.377C1.42397 13.1463 1.37707 12.8759 1.42468 12.6138C1.47229 12.3518 1.61131 12.1152 1.81702 11.946L2.82102 11.119C3.11302 10.879 3.25802 10.506 3.25102 10.128C3.24946 10.043 3.24946 9.95799 3.25102 9.873C3.25802 9.493 3.11302 9.122 2.82102 8.881L1.81702 8.054C1.61156 7.88489 1.4727 7.64843 1.42509 7.38662C1.37749 7.12481 1.42424 6.8546 1.55702 6.624L2.85402 4.377C2.98721 4.14614 3.19803 3.97006 3.44894 3.88014C3.69984 3.79021 3.97451 3.79229 4.22402 3.886L5.44002 4.342C5.79602 4.475 6.19102 4.414 6.51602 4.218C6.68802 4.174 6.66202 4.132 6.73602 4.09C7.06802 3.907 7.31802 3.595 7.38002 3.221L7.59402 1.94Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
//     <path d="M13 10C13 10.7956 12.6839 11.5587 12.1213 12.1213C11.5587 12.6839 10.7956 13 10 13C9.20435 13 8.44129 12.6839 7.87868 12.1213C7.31607 11.5587 7 10.7956 7 10C7 9.20435 7.31607 8.44129 7.87868 7.87868C8.44129 7.31607 9.20435 7 10 7C10.7956 7 11.5587 7.31607 12.1213 7.87868C12.6839 8.44129 13 9.20435 13 10Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
// </svg>
//                     </td> : <td></td>}
//                 </tr>
//                 {/* Child Rows */}

//                 {
//                     expandedRows.includes(row.id) &&
//                     row.subIb &&
//                     <>
//                         <tr className="sub-table-head" >
//                             <th></th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Commission Plan</th>
//                             <th>Buisness</th>
//                             <th></th>
//                         </tr>
//                         {renderRows(row.subIb, level + 1)}
//                     </>
//                 }
//             </React.Fragment>
//         ));
//     };

//     return (
//         <div className="table-component">
//             <table style={{
//                 width: '100%',
//                 borderCollapse: 'separate',
//                 borderSpacing: '0 4px'
//             }}>
//                 <thead>
//                     <tr>
//                         <th></th>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Commission Plan</th>
//                         <th>Timestamp</th>
//                         <th>Settings</th>
//                     </tr>
//                 </thead>
//                 {
//                     isLoading ?
//                         <tbody>
//                             {
//                                 Array.from({ length: 10 }).map((_, i) => <tr key={i} >
//                                     <td><Skeleton /></td>
//                                     <td><Skeleton /></td>
//                                     <td><Skeleton /></td>
//                                     <td><Skeleton /></td>
//                                     <td><Skeleton /></td>
//                                     <td><Skeleton width={30} /></td>
//                                 </tr>)
//                             }
//                         </tbody>
//                         : data.length <= 0 ? <tbody></tbody> :
//                             <tbody>{renderRows(data)}</tbody>
//                 }
//             </table>
//         </div>
//     );
// };

// export default IbAndSubIbTable;

export const CommissionPackageTable = ({ tableData }: { tableData: CommissionPackageType }) => {
    return (
        <div className="table-component">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Package</th>
                        <th>Brokerage</th>
                        <th>Sharing</th>
                        <th>Fee sharing</th>
                        <th>Direct</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, i) => <tr key={i} >
                            <td>{item.package}</td>
                            <td>{item.brokerage}</td>
                            <td>{item.sharing}</td>
                            <td>{item.fee_sharing}</td>
                            <td>{item.direct}</td>
                            <td style={{ textAlign: "center" }} >delete</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export const IBcomisnOvrl = ({ tableData }: { tableData: IBcomisnOvrlType }) => {
    return (
        <div className="table-component">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Commission</th>
                        <th>Withdraw</th>
                        <th>Deposit</th>
                        <th>Investment</th>
                        <th>Last Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, i) => <tr key={i} >
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.commission}</td>
                            <td>{item.withdraw}</td>
                            <td>{item.deposit}</td>
                            <td>{item.investment}</td>
                            <td>{item.last_update}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export const IBdlyComisn = ({ tableData }: { tableData: IBdlyComisnType }) => {
    return (
        <div className="table-component">
            <table border={1}>
                <thead>
                    <tr>
                        <th>Timestamp</th>
                        <th>Commission</th>
                        <th>Withdraw</th>
                        <th>Deposit</th>
                        <th>Investment</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, i) => <tr key={i} >
                            <td>{item.timestamp}</td>
                            <td>{item.commission}</td>
                            <td>{item.withdraw}</td>
                            <td>{item.deposit}</td>
                            <td>{item.investment}</td>
                            <td>{item.view}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export const IBComisnTrnsctn = ({ tableData }: { tableData: IBComisnTrnsctnType }) => {
    return (
        <div className="table-component">
            <table border={1}>
                <thead>
                    <tr>
                        <th>timestamp</th>
                        <th>amount</th>
                        <th>name</th>
                        <th>refer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item, i) => <tr key={i} >
                            <td>{item.timestamp}</td>
                            <td>{item.amount}</td>
                            <td>{item.name}</td>
                            <td>{item.refer}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}