import React, { useState, useEffect, useRef, useReducer } from "react";
import "./form.scss";

import axios from "axios";

function Form(props) {
  const selectmethod = useRef();
  const [url, setUrl] = useState([]);
  const [data, handeldata] = useState([]);
  const [json, handeljjson] = useState([]);
  const [reqest, setreqest] = useState([]);
  const [value1, setrandom] = useState([]);

  function setreqests(e) {
    setreqest(e);
    
  }

  const initialvalue = {
    history: [],
  };

  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (action.type) {
      case "ADD TO HISTORY":
        const history = [payload];
        localStorage.setItem(value1, JSON.stringify(history));

       
        console.log("reduce data ", history);
        return { history: history };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialvalue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: reqest,
      url: url,
    };
    
    props.handleApiCall(data, formData);
  };
  useEffect(() => {
    if (reqest == "GET") {
      setrandom(Math.random());
      axios
        .get(url)
        .then((res) => {
          handeldata(res);

          dispatch({
            type: "ADD TO HISTORY",
            payload: { Method: "GET", URL: url, res: res },
          });

          console.log("GET METHOD", res);
        })
        .catch((err) => {
          dispatch({
            type: "ADD TO HISTORY",
            payload: {
              Method: "GET",
              URL: url,
              res: "ERROR IN GET REQUEST",
            },
          });
          handeldata({ res: "ERROR IN GET REQUEST" });
        });
    } else if (reqest == "POST") {
      setrandom(Math.random());
      axios
        .post(url, json)
        .then((res) => {
          handeldata(res);

          dispatch({
            type: "ADD TO HISTORY",
            payload: { Method: "POST", URL: url, res: res },
          });
        })
        .catch((err) => {
          dispatch({
            type: "ADD TO HISTORY",
            payload: {
              Method: "POST",
              URL: url ? url : "Null",
              res: "ERROR IN POST REQUEST",
            },
          });
          handeldata({ res: "ERROR IN POST REQUEST" });
        });
    } else if (reqest == "PUT") {
      setrandom(Math.random());
      handeldata({ res: "PUT REQEST IS NOT SUPPORTED" });

      dispatch({
        type: "ADD TO HISTORY",
        payload: { Method: "PUT", res: "PUT REQEST IS NOT SUPPORTED" },
      });
    } else if (reqest == "DELETE") {
      setrandom(Math.random());
      handeldata({ res: "DELETE REQEST IS NOT SUPPORTED" });

      dispatch({
        type: "ADD TO HISTORY",
        payload: { Method: "DELETE", res: "DELETE REQEST IS NOT SUPPORTED" },
      });
    }
  }, [reqest]);

  useEffect(() => {
    selectmethod.current.childNodes.forEach((a) =>
      a.addEventListener("click", saveData)
    );
  }, []);
  const saveData = (e) => {
    selectmethod.current.childNodes.forEach((a) =>
      a.classList.remove("active")
    );
    e.currentTarget.classList.add("active");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <div class="card">
            <h2>URL</h2>
            <label class="input">
              <input
                name="url"
                class="input__field"
                type="text"
                onChange={(e) => setUrl(e.target.value)}
              />
              <span class="input__label">URL</span>
            </label>
            <div>
              <button id="ss1" type="submit" class="button-22">
                Send
              </button>
            </div>
            <label class="input">
              <input
                id="ssjs"
                class="input__field"
                type="text"
                onChange={(e) => handeljjson(e.target.value)}
              />
              <span class="input__label">JSON Data</span>
            </label>
          </div>
          {/* <span>URL: </span>
          <input
            name="url"
            type="text"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit"class="button-22" >GO!</button> */}
        </label>
      </form>
      <div className="button-22" ref={selectmethod}>
        <button
          class="button-22"
          role="button"
          onClick={() => setreqests("GET")}
        >
          {" "}
          GET
        </button>
        <button
          class="button-22"
          role="button"
          onClick={() => setreqests("POST")}
        >
          {" "}
          POST{" "}
        </button>
        <button
          class="button-22"
          role="button"
          onClick={() => setreqests("PUT")}
        >
          PUT
        </button>
        <button
          class="button-22"
          role="button"
          onClick={() => setreqests("DELETE")}
        >
          DELETE
        </button>
      </div>
    </>
  );
}

export default Form;
