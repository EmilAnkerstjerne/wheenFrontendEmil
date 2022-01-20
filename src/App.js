import React, { useState, useEffect } from "react";

import "./css/App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import WinnerList from "./components/WinnerList";
import PrizeList from "./components/PrizeList";
import APIFacade from "./API/APIFacade";

let playerName = prompt("Enter name, please", "Bob");

function App() {
  const [winners, setWinners] = useState([]);
  const [prizes, setPrizes] = useState([]);
  const [newWinner, setNewWinner] = useState({ name: "Bob", field_id: 1 });

  // if (playerName !== null) {
  //   setNewWinner.name = playerName;
  // }
  useEffect(() => {
    fetch("/winner/", {
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((response) => response.json())
      .then((winner) => {
        setWinners(winner);
      });
  }, [winners]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((winner) => {
  //       setWinners(winner);
  //     });
  // }, [winners]);

  const spin = () => {
    fetch("/winner/", {
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((response) => response.json())
      .then((winner) => {
        setWinners(winner);
      });
  };

  useEffect(() => {
    fetch("/field/", {
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then((response) => response.json())
      .then((prize) => {
        setPrizes(prize);
      });
  }, []);

  // const getPrizes = () => {
  //   fetch("http://localhost:8080/field/")
  //     .then((response) => response.json())
  //     .then((prize) => {
  //       setPrizes(prize);
  //     });
  // };
  const sendWinner = (newWinner) => {
    APIFacade.addWinner(newWinner);
  };

  const onChange = (event) => {
    setNewWinner({ ...newWinner, [event.target.id]: event.target.value });
    console.log(newWinner);
  };

  return (
    <div className="App">
      <div>
        <h1 className="App-header">Wheel of Fortune</h1>
      </div>
      <div>
        <h3 className="playerName" id="playerName">
          Player name: {playerName}
        </h3>
      </div>
      <div>
        <button className="Button" onClick={spin}>
          Spin!
        </button>
      </div>
      <div>
        <button className="Button" onClick={sendWinner}>
          Winner!
        </button>
      </div>
      <form onChange={onChange}>
        <input placeholder="Name" id="name" />
        <button onClick={sendWinner}>Login</button>
      </form>

      {/* <div>
        <button className="Button" onClick={getPrizes}>
          Check Prizes!
        </button>
      </div> */}
      <ErrorBoundary>
        <WinnerList className="winnerList" hidden="false" winners={winners} />
        <PrizeList prizes={prizes} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
