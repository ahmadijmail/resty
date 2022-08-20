import Form from "../form/index";
import Results from "../results";
import "./home.scss"

import React, { useState, useEffect, useReducer } from "react";

function Home() {

    const [data, setState] = useState([]);
    const [reqest, setformData] = useState([]);
  
    const callApi = async (data, formData) => {
      setState(data);
      setformData(formData);
    };


  return (
  <>


        <div class="cardhome">
      <div >Request Method: {reqest.method}</div>
      <div >URL: {reqest.url}</div>
      </div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
  </>
  )
}

export default Home