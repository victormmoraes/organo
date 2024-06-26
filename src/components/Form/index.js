import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import "./Form.css";
import { v4 as uuid4 } from "uuid";

export default function Form({
  onRegisterCollaborator,
  teams,
  onCreateNewTeam,
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");
  const [team, setTeam] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  function clearFormValues() {
    setName("");
    setRole("");
    setAvatar("");
    setTeam("");
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    await onRegisterCollaborator({
      id: uuid4(),
      name,
      role,
      avatar,
      team,
    });

    clearFormValues();
  }

  return (
    <section className="form-container">
      <form onSubmit={handleFormSubmit}>
        <h2>Preencha os dados para criar o card:</h2>

        <TextInput
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          iptValue={name}
          onChange={(value) => setName(value)}
        />

        <TextInput
          required={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          iptValue={role}
          onChange={(value) => setRole(value)}
        />

        <TextInput
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          iptValue={avatar}
          onChange={(value) => setAvatar(value)}
        />

        <Dropdown
          required={true}
          label="Times"
          itens={teams}
          onChange={(value) => setTeam(value)}
          selectValue={team}
        />
        <Button textContent="Criar Card">Criar Card</Button>
      </form>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          onCreateNewTeam({ name: teamName, color: teamColor });
        }}
      >
        <h2>Crie um novo time:</h2>

        <TextInput
          required
          label="Nome"
          placeholder="Digite o nome do time"
          iptValue={teamName}
          onChange={(value) => setTeamName(value)}
        />

        <TextInput
          required
          label="Cor"
          placeholder="Digite a cor do time"
          iptValue={teamColor}
          onChange={(value) => setTeamColor(value)}
        />
        <Button textContent="Criar Time">Criar Novo time</Button>
      </form>
    </section>
  );
}
