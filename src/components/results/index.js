import React from "react";
import './results.scss'
function Results(props) {

  
  return (
    <>

      <section>

          {!props.data ? <p> </p>:<p id="results">{JSON.stringify(props.data)} </p>}
       
      </section>
    </>
  );
}

export default Results;