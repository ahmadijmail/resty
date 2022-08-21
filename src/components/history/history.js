import { Button } from "@syncfusion/ej2-buttons";
import React, { useState, useEffect, useRef, useReducer } from "react";
import { Link } from "react-router-dom";

import "./history.scss";

function History() {
  const [data, handeljjson] = useState([]);
  const [refresh, setref] = useState([5]);

  const ClearHistory = () => {
    handeljjson([]);

    let keys = Object.keys(localStorage);

    let i = keys.length;
    for (let b = 0; b < i; b++) {
      localStorage.removeItem(keys[b]);
    }
  };
  useEffect(() => {
    let data2 = [];
    let keys = Object.keys(localStorage);
    let handeled = [];

    let i = keys.length;
    for (let b = 0; b < i; b++) {
      data2.push(localStorage.getItem(keys[b]));
      handeled.push(JSON.parse(data2[b]));
      handeljjson(handeled);
    }
  }, []);

  return (
    <>
      {data.map((datas) => {
        return (
          <>
            {datas.map((hey) => {
              return (
                <div class="cardhistory">
                
                  <li>Method: {hey.Method}</li>
                  <li>URL: {hey.URL}</li>
                  <li>Response: {JSON.stringify(hey.res)}</li>
                </div>
              );
            })}
          </>
        );
      })}
      <button class="button-24" role="button" onClick={ClearHistory}>
        Clear History
      </button>
    </>
  );
}

export default History;
