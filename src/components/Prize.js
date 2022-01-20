import React from "react";

const Prize = ({ id, name, value }) => {
  return (
    <div>
      <div className="prize">
        <h2>{id}</h2>
        <h2>{name}</h2>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default Prize;
