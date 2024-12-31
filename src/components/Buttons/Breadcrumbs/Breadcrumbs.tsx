import "./Breadcrumbs.css"

const Breadcrumbs = ({ title }: { title: string; }) => {
    return (
        <div className="bread-crumbs" >
            <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="23" height="23" rx="5.5" stroke="#1E1F24" />
                <path d="M8.50033 9.6665L6.16699 11.9998L8.50033 14.3332" stroke="#1E1F24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.16699 12H17.8337" stroke="#1E1F24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg></div>
            <p>{title}</p>
        </div>
    )
}

export default Breadcrumbs
