import "./menuForms.css"

const KYCDocs = () => {
    return (
        <div className="kyc-docs" >
            <form action="">
                <div className="select-input" >
                    <label htmlFor="">Document Status</label>
                    <select name="documentstatus" value={"PENDING"} >
                        <option value={"PENDING"}>Pending</option>
                        <option value={"APPROVED"}>Approved</option>
                        <option value={"REJECTED"}>Rejected</option>
                        <option value={"SUSPENDED"}>Suspended</option>
                        <option value={"ON HOLD"}>On Hold</option>
                    </select>
                </div>
                <div className="file-input-fields" >
                    <div className="file-input-field" >
                        <label className="form-label">
                            Upload ID Proof: *
                            <input
                                type="file" accept=".pdf,.jpg,.jpeg,.png"
                                className="form-file-input"
                                required
                            />
                        </label>
                    </div>
                    <div className="file-input-field" >
                        <label className="form-label">
                            Upload Address Proof: *
                            <input
                                type="file" accept=".pdf,.jpg,.jpeg,.png"
                                className="form-file-input"
                                required
                            />
                        </label>
                    </div>
                    <div className="file-input-field" >
                        <label className="form-label">
                            Upload Others: *
                            <input
                                type="file" accept=".pdf,.jpg,.jpeg,.png"
                                className="form-file-input"
                                required
                            />
                        </label>
                    </div>
                </div>
                <div className="kyc-submit-btn" >
                    <button>Submit</button>
                </div>
            </form >
        </div>
    )
}

export default KYCDocs
