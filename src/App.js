import React, { useState } from "react";
import Form from "./component/Form";
import PersonList from "./component/PersonList";

function App() {
  const [persons, setPersons] = useState([
    { name: "Milos", job: "developer", gander: "male", id: 0 },
    { name: "Suza", job: "gamer", gander: "female", id: 1 },
    { name: "Deja", job: "gamer", gander: "male", id: 2 },
  ]);
  return (
    <div>
      <PersonList data={persons} />
      <Form />
    </div>
  );
}

export default App;
