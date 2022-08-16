import React, { useState, useEffect, useRef } from "react";
import "./form.scss";

import axios from "axios";
function Form(props) {
  // const formData = {
  //   method:'GET',
  //   url: 'https://pokeapi.co/api/v2/pokemon',
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleApiCall(data);
  };

  const selectmethod = useRef();
  const [url, setUrl] = useState([]);
  const [data, handeldata] = useState([]);
  const [json, handeljjson] = useState([]);
  const [reqest, setreqest] = useState([]);


  useEffect(() => {
    if(reqest=="GET"){
    axios
      .get(url)
      .then((res) => {
        handeldata(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });}else if (reqest=="POST"){
        axios
        .post(url, json)
        .then((res) => {
          console.log(res);
          handeldata(res);
        })
        .catch((err) => {
          console.log(err);
        });
      }

  }, [reqest,url, json]);


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
          <input name="url" type="text" onChange={(e) => setUrl(e.target.value)} />

          <button type="submit">GO!</button>
        </label>

        <label>
          <span>JSON Data: </span>
          <input id="json" name="url" type="text" onChange={(e) => handeljjson(e.target.value)} />
        </label>
      </form>
      <div className="button-2" ref={selectmethod}>
        <button id="get" onClick={() => setreqest("GET")}> GET</button>
     
        <button id="post" onClick={() => setreqest("POST")}>  POST  </button>
        <button id="put" onClick={() => setreqest("PUT")}>PUT</button>
        <button id="delete" onClick={() => setreqest("DELETE")}>DELETE</button>
      </div>
    </>
  );
}

export default Form;
