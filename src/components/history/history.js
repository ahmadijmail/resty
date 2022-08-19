import { Button } from "@syncfusion/ej2-buttons";
import React, { useState, useEffect, useRef, useReducer } from "react";
import { Link } from "react-router-dom";

import "./history.scss";

function History() {
  const [data, handeljjson] = useState([]);
  const [refresh, setref] = useState([5]);

 
  const ClearHistory = (e) =>{
    setref([e]);
    localStorage.removeItem("hist");

  }
  useEffect(() => {
    const data = localStorage.getItem("hist");

    if (data) {
      const handeled = JSON.parse(data);
      handeljjson(handeled);
    }

    console.log(data, "here we are");
  }, []);

  return (
    <>
      {data.map((datas) => {
        return (
          <>
            {console.log(datas.res)}
            <li> {datas.Method}</li>
            <li> {datas.URL}</li>
            <li> {JSON.stringify(datas.res)}</li>
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
