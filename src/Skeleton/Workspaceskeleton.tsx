import Skeleton from "react-loading-skeleton";

const Workspaceskeleton = () => {
  return (
    <div className="workspace-cards-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div className="works-space-card" key={i}>
          <div className="works-space-card-top">
            <div className="title">
              <div className="title-circle">
                <Skeleton width={20} circle />
                {/* <div className="circle"></div> */}
                <p><Skeleton width={100} /></p>
              </div>
              <div style={{ position: "relative" }}>
                <div className="card-menu-icon">
                  <Skeleton />
                </div>
              </div>
            </div>
            <div className="works-space-card-content">
              {/* <p><Skeleton /><strong><Skeleton /></strong></p>
              <p><Skeleton /> <strong><Skeleton /></strong></p> */}
              <div style={{ display: "flex", gap: "4px" }} >
                <p style={{ width: "60%" }} ><Skeleton /></p>
                <p style={{ width: "40%" }} ><Skeleton /></p>
              </div>
              <div style={{ display: "flex", gap: "4px" }} >
                <p style={{ width: "50%" }} ><Skeleton /></p>
                <p style={{ width: "40%" }} ><Skeleton /></p>
              </div>
            </div>
          </div>
          <div className="works-space-card-bottom">
            <button><Skeleton /></button>
            <button><Skeleton /></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workspaceskeleton;
