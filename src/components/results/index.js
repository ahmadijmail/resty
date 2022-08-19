import React from "react";
import './results.scss'
function Results(props) {
  return (
    <>
      <section>
        <p id="results">
          {props.data ? JSON.stringify(props.data, undefined, 2) : null}
        </p>
      </section>
    </>
  );
}

export default Results;