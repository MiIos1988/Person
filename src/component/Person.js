import React from "react";
import "../css/person.css";

function Person({ data, deletePerson }) {
  return (
    <div className="pers">
      <h2>{data.name}</h2>
      <h2>{data.job}</h2>
      <h2>{data.gander}</h2>
      <button
        onClick={() => {
          deletePerson(data.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Person;
