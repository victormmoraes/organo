import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

export default function App() {
  const [collaborators, setCollaborators] = useState([]);
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      color: "#57c278",
    },
    {
      name: "Front-end",
      color: "#82cffa",
    },
    {
      name: "Data-Science",
      color: "#a6d157",
    },
    {
      name: "Back-end",
      color: "#e06b69",
    },
    {
      name: "Inteligência Artificial",
      color: "#db6ebf",
    },
    {
      name: "Mobile",
      color: "#ffba05",
    },
  ]);

  function handleRegisterNewCollaborator(data) {
    setCollaborators([...collaborators, data]);
  }

  function handleChangeTeamBackgroundColor(color, teamName) {
    setTeams(
      teams.map((team) => {
        if (team.name === teamName) {
          console.log(teamName);
          team.color = color;
        }
        return team;
      })
    );
  }

  const teamsName = teams.map((team) => team.name);

  function handleDeleteCollaborator() {
    console.log("Deletando colaborador");
  }

  return (
    <div className="App">
      <Banner />

      <Form
        onRegisterCollaborator={handleRegisterNewCollaborator}
        teams={teamsName}
      />

      {teams.map((team) => (
        <Team
          key={team.name}
          teamName={team.name}
          color={team.color}
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
