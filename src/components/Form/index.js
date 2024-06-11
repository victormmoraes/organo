import { useState } from "react";
import Button from "../Button";
import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import "./Form.css";

export default function Form({ onRegisterCollaborator }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [avatar, setAvatar] = useState("");
  const [team, setTeam] = useState("");

  const times = [
    "Programação",
    "Front-end",
    "Data-Science",
    "Back-end",
    "Inteligência Artificial",
  ];

  function handleFormSubmit(e) {
    e.preventDefault();
    onRegisterCollaborator({
      name,
      role,
      avatar,
      team,
    });
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
          itens={times}
          onChange={(value) => setTeam(value)}
          selectValue={team}
        />
        <Button textContent="Criar Card">Criar Card</Button>
      </form>
    </section>
  );
}
