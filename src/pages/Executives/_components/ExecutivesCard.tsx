

const ExecutivesCard = ({ onClick }: { onClick: () => void }) => {

    return (
        <div className="exctvs-card" >
            <div className="exctvs-card-top" >
                <div className="exctvs-card-title" >
                    <div className="circle active"></div>
                    <p>A Manager</p>
                </div>

                <div className="exctvs-card-edit" onClick={onClick} >
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.3581 3.73916L15.7549 2.33249C16.046 2.03943 16.4409 1.87479 16.8527 1.87479C17.2645 1.87479 17.6594 2.03943 17.9505 2.33249C18.2417 2.62556 18.4053 3.02304 18.4053 3.43749C18.4053 3.85195 18.2417 4.24943 17.9505 4.54249L9.15873 13.3917C8.72102 13.832 8.18125 14.1556 7.58814 14.3333L5.36514 15L6.02749 12.7625C6.20407 12.1655 6.5256 11.6222 6.96305 11.1817L14.3581 3.73916ZM14.3581 3.73916L16.5422 5.93749M15.3003 11.6667V15.625C15.3003 16.1223 15.1041 16.5992 14.7547 16.9508C14.4054 17.3025 13.9315 17.5 13.4375 17.5H4.7442C4.25014 17.5 3.77631 17.3025 3.42696 16.9508C3.07761 16.5992 2.88135 16.1223 2.88135 15.625V6.87499C2.88135 6.37771 3.07761 5.9008 3.42696 5.54917C3.77631 5.19754 4.25014 4.99999 4.7442 4.99999H8.67687" stroke="#62636C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="exctvs-card-btm" >
                acharuser@yopmail.com
            </div>
        </div>
    )
}

export default ExecutivesCard
