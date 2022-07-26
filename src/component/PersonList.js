import React from "react";
import Person from "./Person";

function PersonList({ data, deletePerson }) {
  const listOfPerson = data.map((person) => {
    return <Person data={person} key={person.id} deletePerson={deletePerson} />;
  });

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>{listOfPerson}</div>
  );
}

export default PersonList;
