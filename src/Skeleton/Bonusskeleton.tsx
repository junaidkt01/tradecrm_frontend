import Skeleton from "react-loading-skeleton";

const Bonusskeleton = () => {
  return (
    <div className="bonus-card-container" style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div className="bonus-card" key={i}>
          <div className="bonus-card-top">
            <div className="title">
              <div className="title-circle">
              <Skeleton circle={true} height={15} width={15} />
                {/* <div className="circle"> </div> */}
                <p><Skeleton /></p>
              </div>

              <div style={{ position: 'relative' }}>
                <div className="card-menu-icon">
                  <Skeleton width={30} />
                </div>
              </div>
            </div>
            <div className="bonus-card-content">
                <div>

              {/* <p><Skeleton /> <strong><Skeleton /></strong></p> */}
               <div style={{ display: "flex", gap: "4px" }} >
                                                  <p style={{ width: "60%" }} ><Skeleton /></p>
                                                  <p style={{ width: "10%" }} ><Skeleton /></p>
                                              </div>
                </div>
              
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bonusskeleton;
