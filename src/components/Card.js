import React, { useState } from "react";
const Card = (props) => {
  const clickHeart = (e) => {
    e.stopPropagation()
    console.log('heart');
    props.fav()
    isFav ? setIsFav(false) : setIsFav(true)
  }
  const [isFav, setIsFav] = useState(props.isFav)
  return (
    <div className="col-lg-3 col-sm-6" style={{ marginBottom: '0.5rem', position: 'relative' }}>
      <div className="card" onClick={props.onClick}>
        <img
          src={props.img}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt=""
        />
        <div className="card-body">
          <p
            className="card-text"
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            }}
            title={props.name}
          >
            {props.name}
          </p>
        </div>
      </div>
      <div className="heart" onClick={clickHeart}>
        {
          isFav ? (
            <i className="fas fa-heart" style={{color: '#dc3545'}}></i>
          ) : (
            <i className="far fa-heart"></i>
          )
        }
      </div>
    </div>
  );
};
export default Card;
