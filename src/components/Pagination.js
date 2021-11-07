import React from "react";
const Pagination = (props) => {
  const style = {
    color: "#aaa",
    cursor: "pointer"
  };
  const UnAllowStyle = {
    backgroundColor: "red",
    color: "white",
    cursor: "not-allowed"
  };
  return (
    <div className="pagination d-flex">
      <span
        className="page"
        onClick={() => {
          props.subtract();
        }}
        style={props.num === 1 ? UnAllowStyle : style}
      >
        ＜
      </span>
      <span className="page">{props.num}</span>
      <span
        className="page"
        onClick={() => {
          props.add();
        }}
        style={props.isLast ? UnAllowStyle : style}
      >
        ＞
      </span>
    </div>
  );
};
export default Pagination;
