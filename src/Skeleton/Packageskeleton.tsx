import Skeleton from "react-loading-skeleton";

const Packageskeleton = () => {
  return (
    <div className="packages-card-container" style={{display:'flex',flexWrap:'wrap',gap:'10px'}}>
      {Array.from({ length: 3}).map((_, i) => (
        <div className="packages-card" key={i}>
          <div className="packages-card-top">
            <div className="title">
              <div className="title-circle">
                {/* <div className="circle"> */}
                    <Skeleton width={20} circle/>
                    {/* </div> */}
                <p><Skeleton width={100} /></p>
              </div>
              <div style={{ position: "relative" }}>
                <div className="card-menu-icon">
                  <div className='live-demo'>
                   
                    <p><Skeleton width={30} height={20} /></p>
                    </div>
                  {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.75C11.8011 6.75 11.6103 6.67098 11.4697 6.53033C11.329 6.38968 11.25 6.19891 11.25 6C11.25 5.80109 11.329 5.61032 11.4697 5.46967C11.6103 5.32902 11.8011 5.25 12 5.25C12.1989 5.25 12.3897 5.32902 12.5303 5.46967C12.671 5.61032 12.75 5.80109 12.75 6C12.75 6.19891 12.671 6.38968 12.5303 6.53033C12.3897 6.67098 12.1989 6.75 12 6.75ZM12 12.75C11.8011 12.75 11.6103 12.671 11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12C12.75 12.1989 12.671 12.3897 12.5303 12.5303C12.3897 12.671 12.1989 12.75 12 12.75ZM12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18C11.25 17.8011 11.329 17.6103 11.4697 17.4697C11.6103 17.329 11.8011 17.25 12 17.25C12.1989 17.25 12.3897 17.329 12.5303 17.4697C12.671 17.6103 12.75 17.8011 12.75 18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg> */}
                  <Skeleton/>
                </div>
              </div>
            </div>
            <div className="packages-card-content">
              {/* <p><Skeleton /><strong><Skeleton /></strong></p>
              <p><Skeleton /> <strong><Skeleton /></strong></p>
              <p><Skeleton /> <strong><Skeleton /></strong></p>
              <p><Skeleton /> <strong><Skeleton /></strong></p> */}
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

export default Packageskeleton;