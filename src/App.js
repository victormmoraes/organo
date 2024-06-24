import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";

export default function App() {
  const [collaborators, setCollaborators] = useState([]);
  const [teams, setTeams] = useState([
    {
      name: "Programação",
      primary_color: "#57c278",
      secondary_color: "#d9f7e9",
    },
    {
      name: "Front-end",
      primary_color: "#82cffa",
      secondary_color: "#e8f8ff",
    },
    {
      name: "Data-Science",
      primary_color: "#a6d157",
      secondary_color: "#f0f8e2",
    },
    {
      name: "Back-end",
      primary_color: "#e06b69",
      secondary_color: "#fde7e8",
    },
    {
      name: "Inteligência Artificial",
      primary_color: "#db6ebf",
      secondary_color: "#fae9f5",
    },
    {
      name: "Mobile",
      primary_color: "#ffba05",
      secondary_color: "#fff5d9",
    },
  ]);

  function handleRegisterNewCollaborator(data) {
    setCollaborators([...collaborators, data]);
  }

  function handleChangeTeamBackgroundColor(color, teamName) {
    setTeams(
      teams.map((team) => {
        if (team.name === teamName) {
          console.log(teamName)
          team.primary_color = color;
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
          primaryColor={team.primary_color}
          secondaryColor={team.secondary_color}
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
