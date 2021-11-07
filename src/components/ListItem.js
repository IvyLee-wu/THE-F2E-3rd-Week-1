import React from "react";

const ListItem = (props) => {
  return (
    <div className="row g-2 justify-content-center">
      <div className="col-md-6">
        <img
          src={props.detail.Picture.PictureUrl1}
          alt=""
          style={{ width: "100%", height: "530px", objectFit: "cover", borderRadius: '1rem' }}
        />
      </div>
      <div className="col-md-6">
        <div
          className="card"
          style={{ width: "100%", height: "530px", overflow: "auto" }}
        >
          <div className="card-body">
            <h5 className="card-title" style={{fontSize:'24px', fontWeight: 'bold'}}>{props.detail.Name}</h5>
            <p className="card-text">
              <span style={{fontSize:'16px', fontWeight: 'bold'}}>開放時間</span>
              <div className="mt-2" style={{fontSize:'14px'}}>
                {props.detail.OpenTime ? props.detail.OpenTime : '暫未提供'}
              </div>
            </p>
            <p className="card-text">
              <span style={{fontSize:'16px', fontWeight: 'bold'}}>簡介</span>
              <div className="mt-2" style={{fontSize:'14px'}}>
                {props.detail.DescriptionDetail ? props.detail.DescriptionDetail : '暫未提供'}
              </div>
            </p>
            <div>
              <button type="button" className="btn" style={{color: '#dc3545', borderColor: '#dc3545', marginRight: '10px'}}>{props.detail.Phone}</button>
              {
                props.detail.WebsiteUrl ? (
                  <button type="button" className="btn btn-danger" onClick={() => {window.open(props.detail.WebsiteUrl)}}>官網</button>
                ) : ''
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ListItem;
