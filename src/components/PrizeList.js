import React from "react";
import Prize from "./Prize";
const PrizeList = ({ prizes }) => {
  return (
    <div className="displayList" style={{ float: "right" }}>
      <h2>Prizes:</h2>
      {prizes.map((prize, i) => {
        return (
          <div>
            <Prize
              //We need a unique key here we just use ID.
              key={prizes[i].id}
              // id={prizes[i].id}
              name={prizes[i].name}
              value={prizes[i].field_value}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PrizeList;
