import Dropdown from "../Dropdown";
import TextInput from "../TextInput";
import './Form.css'

export default function Form() {
  const times = [
    'Programação',
    'Front-end',
    'Data-Science',
    'Back-end',
    'Inteligência Artificial',
  ]

  return (
    <section className="form-container">
      <form>
        <h2>Preencha os dados para criar o card:</h2>
        <TextInput label="Nome" placeholder="Digite o seu nome" />
        <TextInput label="Cargo" placeholder="Digite o seu cargo" />
        <TextInput label="Imagem" placeholder="Informe o endereço da imagem" />
        <Dropdown label="Times" itens={times} />
      </form>
    </section>
  )
}