import React, { useState, useEffect } from "react";
import "./form.scss";
import { Switch } from '@syncfusion/ej2-buttons';





import axios from "axios";
function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();

    props.handleApiCall(data);
  };

  const [apiRes, handelRes] = useState([]);
  const [data, handeldata] = useState([]);

  useEffect(() => {
    //https://pokeapi.co/api/v2/pokemon
    axios
      .get(apiRes)
      .then((res) => {
        handeldata(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function handelchange(event) {
    handelRes(event.target.value);
    //console.log(event.target.value);
  }

  function handelClick() {
    let clicked = fales;
    if (!clicked) {
      clicked = true;
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" onChange={handelchange} />
          <button type="submit">GO!</button>
        </label>
      
      </form>
    </>
  );
}

export default Form;
