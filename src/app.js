import React, { useState, useEffect, useReducer } from "react";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header";
import Footer from "./components/footer";
// import Form from "./components/form";
// import Results from "./components/results";
import History from "./components/history/history";
import Home from "./components/Home/Home";

function App() {
  // const [data, setState] = useState([]);
  // const [reqest, setformData] = useState([]);

  // const callApi = async (data, formData) => {
  //   setState(data);
  //   setformData(formData);
  // };

  return (
    <React.Fragment>
     
      
      <Router>
      <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
