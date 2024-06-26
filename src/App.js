import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import { v4 as uuid4 } from "uuid";

export default function App() {
  const [collaborators, setCollaborators] = useState([]);
  const [teams, setTeams] = useState([
    {
      id: uuid4(),
      name: "Programação",
      color: "#57c278",
    },
    {
      id: uuid4(),
      name: "Front-end",
      color: "#82cffa",
    },
    {
      id: uuid4(),
      name: "Data-Science",
      color: "#a6d157",
    },
    {
      id: uuid4(),
      name: "Back-end",
      color: "#e06b69",
    },
    {
      id: uuid4(),
      name: "Inteligência Artificial",
      color: "#db6ebf",
    },
    {
      id: uuid4(),
      name: "Mobile",
      color: "#ffba05",
    },
  ]);

  function handleRegisterNewCollaborator(data) {
    setCollaborators([...collaborators, data]);
  }

  function handleChangeTeamBackgroundColor(color, id) {
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      })
    );
  }

  function handleCreateNewTeam(newTeam) {
    setTeams([...teams, { ...newTeam, id: uuid4() }]);
  }

  const teamsName = teams.map((team) => team.name);

  function handleDeleteCollaborator(id) {
    setCollaborators(collaborators.filter((c) => c.id !== id));
  }

  return (
    <div className="App">
      <Banner />

      <Form
        onRegisterCollaborator={handleRegisterNewCollaborator}
        teams={teamsName}
        onCreateNewTeam={handleCreateNewTeam}
      />

      {teams.map((team) => (
        <Team
          key={team.id}
          team={team}
          collaborators={collaborators.filter(
            (collab) => collab.team === team.name
          )}
          onColorChange={handleChangeTeamBackgroundColor}
          onDelete={handleDeleteCollaborator}
        />
      ))}
    </div>
  );
}
