import React from "react";
const MobileCard = (props) => {
  return (
    <div className="col-lg-6">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-4">
            <img 
              src={props.img.PictureUrl1 ? props.img.PictureUrl1 : ''} 
              className="img-fluid rounded-start" 
              alt="..." 
              style={{ height: "125px", objectFit: "cover" }} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title" style={{fontSize: '14px'}}>{props.name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileCard;
