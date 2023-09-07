import React, { useState } from "react";
import "../css/form.css";

function Form({ addNewPerson }) {
  const [data, setData] = useState({ name: "", job: "", gander: "" });
  return (
    <div className="form">
      <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="job"
        value={data.job}
        onChange={(e) => setData({ ...data, job: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="gander"
        value={data.gander}
        onChange={(e) => setData({ ...data, gander: e.target.value })}
      />
      <br />
      <button
        onClick={() => {
          data.id = Math.floor(Math.random() * 100 - 10);
          addNewPerson(data);
          setData({ name: "", job: "", gander: "" });
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Form;
