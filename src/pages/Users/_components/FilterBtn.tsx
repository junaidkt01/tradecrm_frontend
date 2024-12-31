import "./styles.css"

const FilterBtn = ({ isActive, title, count, onClick }: { isActive?: boolean, title: string, count?: number; onClick?: () => void }) => {

    return (
        <button onClick={onClick} className={`filter-btn ${isActive ? "active" : ""}`}>
            <p>{title}</p>
            {count && <div><p>{count}</p></div>}
        </button>
    )
}

export default FilterBtn;