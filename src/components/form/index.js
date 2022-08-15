import React, { useState, useEffect, useRef } from "react";
import "./form.scss";

import axios from "axios";
function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall(data);
  };

  const selectmethod = useRef();
  const [apiRes, handelRes] = useState([]);
  const [data, handeldata] = useState([]);
  const [json, handeljjson] = useState([]);

  useEffect(() => {
    axios
      .get(apiRes)
      .then((res) => {
        handeldata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // =============================
  const handeljson = (e) => {
    e.preventDefault();

    const test1 = {
      username: "ahmad",
    };

    axios
      .post(apiRes, json)
      .then((res) => {
        console.log(res);
        handeldata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function handelchange(event) {
    handelRes(event.target.value);
    //console.log(event.target.value);
  }

  function handelsjjson(event) {
    handeljjson(event.target.value);
    // console.log(event.target.value);
  }



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
          <input name="url" type="text" onChange={handelchange} />

          <button type="submit">GO!</button>
        </label>

        <label>
          <span>JSON Data: </span>
          <input id="json" name="url" type="text" onChange={handelsjjson} />
        </label>
      </form>
      <div className="button-2" ref={selectmethod}>
        <button id="get" onClick={handleSubmit}>
          GET
        </button>
        <button id="post"  onClick={handeljson}>
          POST
        </button>
        <button id="put">PUT</button>
        <button id="delete">DELETE</button>
      </div>
    </>
  );
}

export default Form;
