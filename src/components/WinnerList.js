import React from "react";
import Winner from "./Winner";
const WinnerList = ({ winners }) => {
  return (
    <div className="displayList">
      {winners.map((winner, i) => {
        return (
          <div>
            <Winner
              //We need a unique key here we just use ID.
              key={winners[i].id}
              // id={winners[i].id}
              name={winners[i].name}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WinnerList;
