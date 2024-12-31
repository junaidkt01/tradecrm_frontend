import Breadcrumbs from "../../components/Buttons/Breadcrumbs/Breadcrumbs";
import "./Settings.css"

const Settings = () => {
    return (
        <div className="settings-page" >
            <Breadcrumbs title={"Setting"} />
            <div className="setting-tables" >
                <div className="container">
                    <table className="first-settings-table" >
                        <thead>
                            <tr>
                                <th>Account (Deposit/Withdraw)</th>
                                <th>Internal</th>
                                <th>External</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Transfer</td>
                                <td><input type="checkbox" /></td>
                                <td><input type="checkbox" /></td>
                            </tr>
                            <tr>
                                <td>Transfer Commission %</td>
                                <td><input type="number" value="1" min="0" /></td>
                                <td><input type="number" value="1" min="0" /></td>
                            </tr>
                            <tr>
                                <td>Transfer Mode</td>
                                <td className="toggle-settings-btn" >
                                    <span className="label">A</span>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <span className="label">M</span>
                                </td>
                                <td className="toggle-settings-btn" >
                                    <span className="label">A</span>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <span className="label">M</span>
                                </td>
                            </tr>
                            <tr>
                                <td>Allow Withdraw When Trade is Open</td>
                                <td colSpan={2} className="toggle-settings-btn" >
                                    <span className="label">A</span>
                                    <label className="switch">
                                        <input type="checkbox" />
                                        <span className="slider"></span>
                                    </label>
                                    <span className="label">M</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <table className="second-settings-table">
                        <thead>
                            <tr>
                                <th colSpan={2}>Workspace</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Default Tradersroom Workspace</td>
                                <td>
                                    <select>
                                        <option value="default">Default</option>
                                        <option value="custom1">Custom 1</option>
                                        <option value="custom2">Custom 2</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Default IB Workspace</td>
                                <td>
                                    <select>
                                        <option value="default">Default</option>
                                        <option value="custom1">Custom 1</option>
                                        <option value="custom2">Custom 2</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>CRM Type</td>
                                <td>
                                    <select>
                                        <option value="both">Both</option>
                                        <option value="tradersroom">Tradersroom</option>
                                        <option value="ib">IB</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <table className="second-settings-table ib-settings">
                        <thead>
                            <tr>
                                <th colSpan={2} >IB</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Commission applicable only when trade duration</td>
                                <td><input type="number" placeholder="1 Minutes" name="" id="" /></td>
                            </tr>
                            <tr>
                                <td>Eligible duration for IB Commission</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                            <tr>
                                <td>IB Investment Commission</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                            <tr>
                                <td>IB Withdraw Commission</td>
                                <td><input type="checkbox" name="" id="" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="container">
                    <table className="second-settings-table wallet-settings">
                        <thead>
                            <tr>
                                <th colSpan={2} >Wallet (Deposit / Withdraw)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Transfer</td>
                                <td><input type="checkbox" name="" id="" />ANY</td>
                            </tr>
                            <tr>
                                <td>Transfer Commission %</td>
                                <td><input type="number" placeholder="1" name="" id="" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Settings;