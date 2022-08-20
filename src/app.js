import React  from "react";
import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";

import History from "./components/history/history";
import Home from "./components/Home/Home";

function App() {


  return (
    <React.Fragment>
     
      
      <Router>
      <Header />
        <Routes>
        <Route path="resty/" element={<Home />} />
        <Route path="resty/history" element={<History />} />
        </Routes>
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
