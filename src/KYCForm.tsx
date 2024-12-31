import { useState } from 'react';

const KYCForm = () => {
    const [documentStatus, setDocumentStatus] = useState('PENDING');
    const [idProof, setIdProof] = useState(null);
    const [addressProof, setAddressProof] = useState(null);
    const [otherProof, setOtherProof] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleFileChange = (e, setFile) => {
        const file = e.target.files[0];
        if (file && file.size > 5 * 1024 * 1024) { // 5MB limit
            setError('File size should not exceed 5MB');
            return;
        }
        setFile(file);
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        // Validate required files
        if (!idProof || !addressProof) {
            setError('ID Proof and Address Proof are required');
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('documentStatus', documentStatus);
        formData.append('idProof', idProof);
        formData.append('addressProof', addressProof);
        if (otherProof) {
            formData.append('otherProof', otherProof);
        }
        formData.append('email', 't@yop4mail.com');

        try {
            const response = await fetch('http://localhost:5000/api/upload-documents', {
                method: 'POST',
                body: formData,
            });

            console.log("response: ", response)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setSuccess(true);
            // Reset form
            setIdProof(null);
            setAddressProof(null);
            setOtherProof(null);
            setDocumentStatus('PENDING');
        } catch (error) {
            console.error('Error uploading documents:', error);
            setError(error.message || 'Failed to upload documents. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="kyc-form-container">
            {error && (
                <div className="alert alert-error">
                    {error}
                </div>
            )}

            {success && (
                <div className="alert alert-success">
                    Documents uploaded successfully!
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">
                        Document Status:
                        <select
                            value={documentStatus}
                            onChange={(e) => setDocumentStatus(e.target.value)}
                            className="form-select"
                        >
                            <option value="PENDING">PENDING</option>
                            <option value="APPROVED">APPROVED</option>
                            <option value="REJECTED">REJECTED</option>
                        </select>
                    </label>
                </div>

                <div className="form-group">
                    <label className="form-label">
                        Upload ID Proof: *
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setIdProof)}
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="form-file-input"
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label className="form-label">
                        Upload Address Proof: *
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setAddressProof)}
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="form-file-input"
                            required
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label className="form-label">
                        Upload Others:
                        <input
                            type="file"
                            onChange={(e) => handleFileChange(e, setOtherProof)}
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="form-file-input"
                        />
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="submit-button"
                >
                    {loading ? 'Uploading...' : 'Update Documents'}
                </button>
            </form>
        </div>
    );
};

export default KYCForm;


// const [data, setData] = useState({
//     documentStatus: "",
//     idProof: "",
//     addressProof: "",
//     otherProof: "",
//     email: "t@yopmail.com"
// })