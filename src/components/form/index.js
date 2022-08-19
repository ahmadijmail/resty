import React, { useState, useEffect, useRef, useReducer } from "react";
import "./form.scss";

import axios from "axios";

function Form(props) {
  const selectmethod = useRef();
  const [url, setUrl] = useState([]);
  const [data, handeldata] = useState([]);
  const [json, handeljjson] = useState([]);
  const [reqest, setreqest] = useState([]);

  const [show, setShow] = useState(false);

  function setreqests(v) {
    setreqest(v);
  }

  const initialvalue = {
    history: [],
  };

  const reducer = (state, action) => {
    const { type, payload } = action;
    switch (action.type) {
      case "ADD TO HISTORY":
        const history = [...state.history, payload];
        localStorage.setItem("hist", JSON.stringify(history));
        console.log("reduce data ", history);
        return { history: history };

      case "Clear History":
        return { history: [] };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialvalue);
  useEffect(() => {
    if (reqest == "GET") {
      axios
        .get(url)
        .then((res) => {
          handeldata(res);
          setreqest([]);
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
              res: "GET REQUEST CANNOT BE DONE",
            },
          });
          handeldata({ res: "GET REQUEST CANNOT BE DONE" });
        });
    } else if (reqest == "POST") {
      axios
        .post(url, json)
        .then((res) => {
          handeldata(res);

          dispatch({
            type: "ADD TO HISTORY",
            payload: { Method: "POST", URL: url, res: res },
          });

          console.log("POSt METHOD", res);
        })
        .catch((err) => {
          dispatch({
            type: "ADD TO HISTORY",
            payload: {
              Method: "POST",
              URL: url ? url : "Null",
              res: "PUT REQUEST CANNOT BE DONE",
            },
          });
          handeldata({ res: "PUT REQUEST CANNOT BE DONE" });
        });
    } else if (reqest == "PUT") {
      handeldata("PUT REQEST IS NOT SUPPORTED");

      dispatch({
        type: "ADD TO HISTORY",
        payload: { Method: "PUT", URL: url },
      });
    } else if (reqest == "DELETE") {
      handeldata("DELETE REQEST IS NOT SUPPORTED");

      dispatch({
        type: "ADD TO HISTORY",
        payload: { Method: "DELETE", URL: url },
      });

      // console.log("PUT METHOD", res);
    }
  }, [reqest, url]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: reqest,
      url: url,
    };

    props.handleApiCall(data, formData);
  };

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
          <span>URL: </span>
          <input
            name="url"
            type="text"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">GO!</button>
        </label>
        <div className="button-2" ref={selectmethod}>
          <button class="button-22" role="button"  onClick={() => setreqests("GET")}>
            {" "}
            GET
          </button>
          <button class="button-22" role="button" onClick={() => setreqests("POST")}>
            {" "}
            POST{" "}
          </button>
          <button class="button-22" role="button" onClick={() => setreqest("PUT")}>
            PUT
          </button>
          <button class="button-22" role="button" onClick={() => setreqest("DELETE")}>
            DELETE
          </button>
        </div>
        <label>
          <span>JSON Data: </span>
          <input
            id="json"
            name="url"
            type="text"
            onChange={(e) => handeljjson(e.target.value)}
          />
        </label>
      </form>
    </>
  );
}

export default Form;
