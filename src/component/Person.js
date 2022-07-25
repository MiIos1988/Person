import React from "react";
import "../css/person.css";

function Person({ data }) {
  return (
    <div className="pers">
      <h2>{data.name}</h2>
      <h2>{data.job}</h2>
      <h2>{data.gander}</h2>
    </div>
  );
}

export default Person;
