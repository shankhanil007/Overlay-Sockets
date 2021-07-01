import React from "react";

function Question({ obj }) {
  return (
    <div class="container">
      <center>
        <div
          style={{
            padding: "10px",
            maxWidth: "200px",
            marginTop: "100px",
            backgroundColor: "red",
          }}
        >
          <h4>{obj[0].question}</h4>
          <h5>{obj[0].answer}</h5>
        </div>
      </center>
    </div>
  );
}

export default Question;
