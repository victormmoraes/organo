import TextInput from "../TextInput";
import './Form.css'

export default function Form() {
  return (
    <section className="form-container">
      <form>
        <h2>Preencha os dados para criar o card:</h2>
        <TextInput label="Nome" placeholder="Digite o seu nome" />
        <TextInput label="Cargo" placeholder="Digite o seu cargo" />
        <TextInput label="Imagem" placeholder="Informe o endereço da imagem" />
      </form>
    </section>
  )
}