import Skeleton from "react-loading-skeleton";

const Managerskeleton = () => {
    return (
        <div className="manager-card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px    ' }}>
            {Array.from({ length: 6 }).map((_, i) => (
                <div className="manager-card" key={i}>
                    <div className="manager-card-top">
                        <div className="title">
                            <div className="title-circle">
                                <div><Skeleton width={15} height={15} circle /></div>
                                <p><Skeleton width={100} /></p>
                            </div>
                            <div style={{ position: "relative" }}>
                                <div className="card-menu-icon">
                                    <Skeleton width={20} />
                                </div>
                            </div>
                        </div>
                        <div className="manager-card-content">
                            <div>
                                <p style={{ width: "50%" }} ><Skeleton /></p>
                                <div style={{ display: "flex", gap: "4px" }} >
                                    <p style={{ width: "40%" }} ><Skeleton /></p>
                                    <p style={{ width: "70%" }} ><Skeleton /></p>
                                </div>
                                <div style={{ display: "flex", gap: "4px" }} >
                                    <p style={{ width: "40%" }} ><Skeleton /></p>
                                    <p style={{ width: "60%" }} ><Skeleton /></p>
                                </div>
                                <div style={{ display: "flex", gap: "4px" }} >
                                    <p style={{ width: "40%" }} ><Skeleton /></p>
                                    <p style={{ width: "70%" }} ><Skeleton /></p>
                                </div>
                                <div style={{ display: "flex", gap: "4px" }} >
                                    <p style={{ width: "40%" }} ><Skeleton /></p>
                                    <p style={{ width: "60%" }} ><Skeleton /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Managerskeleton;
