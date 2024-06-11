import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";

export default function App() {
  const [collaborators, setCollaborators] = useState([{}]);

  function handleRegisterNewCollaborator(data) {
    setCollaborators([...collaborators, data]);
    console.log(collaborators);
  }

  return (
    <div className="App">
      <Banner />

      <Form onRegisterCollaborator={handleRegisterNewCollaborator} />
    </div>
  );
}
