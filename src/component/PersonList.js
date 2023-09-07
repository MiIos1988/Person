import React from "react";
import Person from "./Person";

function PersonList({ data, deletePerson }) {
  return <div style={{ display: "flex", flexWrap: "wrap" }}>
    {
       data.map((person) => {
        return <Person data={person} key={person.id} deletePerson={deletePerson} />;
      })
    }
  </div>
}

export default PersonList;
