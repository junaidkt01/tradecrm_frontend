import Skeleton from "react-loading-skeleton"

const Vouchercardskeleton = () => {
  return (
    <div className="voucher-card-container" style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
         {Array.from({ length: 4 }).map((_, i) => (
    <div className="voucher-card" key={i}>
            <div className="cards-top">
                <div>
                    <p><Skeleton width={60} height={20}/></p>
                    <button style={{background:'none'}}><Skeleton width={70} height={30}/></button>
                </div>
                <div>
                    {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 11.5V13.75C10.5 14.164 10.164 14.5 9.75 14.5H3.25C3.05109 14.5 2.86032 14.421 2.71967 14.2803C2.57902 14.1397 2.5 13.9489 2.5 13.75V5.25C2.5 4.836 2.836 4.5 3.25 4.5H4.5C4.83505 4.49977 5.16954 4.52742 5.5 4.58267M10.5 11.5H12.75C13.164 11.5 13.5 11.164 13.5 10.75V7.5C13.5 4.52667 11.338 2.05933 8.5 1.58267C8.16954 1.52742 7.83505 1.49977 7.5 1.5H6.25C5.836 1.5 5.5 1.836 5.5 2.25V4.58267M10.5 11.5H6.25C6.05109 11.5 5.86032 11.421 5.71967 11.2803C5.57902 11.1397 5.5 10.9489 5.5 10.75V4.58267M13.5 9V7.75C13.5 7.15326 13.2629 6.58097 12.841 6.15901C12.419 5.73705 11.8467 5.5 11.25 5.5H10.25C10.0511 5.5 9.86032 5.42098 9.71967 5.28033C9.57902 5.13968 9.5 4.94891 9.5 4.75V3.75C9.5 3.45453 9.4418 3.16195 9.32873 2.88896C9.21566 2.61598 9.04992 2.36794 8.84099 2.15901C8.63206 1.95008 8.38402 1.78435 8.11104 1.67127C7.83806 1.5582 7.54547 1.5 7.25 1.5H6.5" stroke="#1E1F24" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                    <Skeleton/>
                </div>
            </div>
            <div className="cards-bottom">
                {/* <p><Skeleton/> <strong><Skeleton/></strong></p>
                <p><Skeleton/><strong><Skeleton/></strong></p>
                <p><Skeleton/> <strong><Skeleton/></strong></p>
                <p><Skeleton/> <strong><Skeleton/></strong></p> */}
                 <div style={{ display: "flex", gap: "4px" }} >
                                <p style={{ width: "60%" }} ><Skeleton /></p>
                                <p style={{ width: "40%" }} ><Skeleton /></p>
                              </div>
                 <div style={{ display: "flex", gap: "4px" }} >
                                <p style={{ width: "40%" }} ><Skeleton /></p>
                                <p style={{ width: "40%" }} ><Skeleton /></p>
                              </div>
                 <div style={{ display: "flex", gap: "4px" }} >
                                <p style={{ width: "70%" }} ><Skeleton /></p>
                                <p style={{ width: "40%" }} ><Skeleton /></p>
                              </div>
                 <div style={{ display: "flex", gap: "4px" }} >
                                <p style={{ width: "50%" }} ><Skeleton /></p>
                                <p style={{ width: "40%" }} ><Skeleton /></p>
                              </div>

            </div>
            <div className="voucher-bottom-btns" >
                <button><Skeleton/></button>
                <button style={{background:"none"}}><Skeleton width={60} height={30}/></button>
            </div>
        </div>
         ))}
        </div>
  )
}

export default Vouchercardskeleton
