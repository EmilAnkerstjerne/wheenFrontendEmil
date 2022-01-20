import { localURL as URL } from "../settings";
import React, { useState, useEffect } from "react";

const configureOptions = (method, body) => {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
};

/****************POST****************/
function APIFacade() {
  function addWinner(winner) {
    let options = configureOptions("POST",
    {
      name: "Emil",
      field: {
        id: 1
      }
    }
    );
    // console.log(options);
    return fetch(URL, options); //Returns promise
  }

  return {
    addWinner,
  };
}

const facade = APIFacade();
export default facade;
