import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";
//import { useEffect } from "react/cjs/react.production.min";

function App() {
  const [data, setState] = useState(null );

  const callApi = (data) => {
    setState(data);
  };

  return (
    <React.Fragment>
      <Header />
     
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
