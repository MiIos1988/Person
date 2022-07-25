import React from "react";
import "../css/form.css";

function Form() {
  return (
    <div className="form">
      <input type="text" placeholder="name" />
      <br />
      <input type="text" placeholder="job" />
      <br />
      <input type="text" placeholder="gander" />
      <br />
      <button>Save</button>
    </div>
  );
}

export default Form;
