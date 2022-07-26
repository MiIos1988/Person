import React, { useState } from "react";
import Form from "./component/Form";
import PersonList from "./component/PersonList";
export const deletePush = React.createContext;

function App() {
  const [persons, setPersons] = useState([
    { name: "Milos", job: "developer", gander: "male", id: 0 },
    { name: "Suza", job: "gamer", gander: "female", id: 1 },
    { name: "Deja", job: "gamer", gander: "male", id: 2 },
  ]);

  const addNewPerson = (data) => {
    setPersons([...persons, data]);
  };

  const deletePerson = (id) => {
    const filterData = persons.filter((person) => {
      return person.id !== id;
    });
    setPersons(filterData);
  };

  return (
    <div>
      <PersonList data={persons} deletePerson={deletePerson} />
      <Form addNewPerson={addNewPerson} />
    </div>
  );
}

export default App;
