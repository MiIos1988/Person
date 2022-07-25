import React from "react";
import Person from "./Person";

function PersonList({ data }) {
  const listOfPerson = data.map((person) => {
    return <Person data={person} key={person.id} />;
  });

  return <div>{listOfPerson}</div>;
}

export default PersonList;
