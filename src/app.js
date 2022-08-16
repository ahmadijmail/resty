import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
import Form from "./components/form";
import Results from "./components/results";


function App() {
  const [data, setState] = useState(null);
  const [reqest, setformData] = useState(null);
  const callApi = (data) => {
    setState(data);
    
  };

  return (
    <React.Fragment>
      <Header />
      <div>Request Method: </div>
        {/* <div>URL: {formData.url}</div> */}
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
