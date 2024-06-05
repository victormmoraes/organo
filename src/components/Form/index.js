import Button from "../Button";
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

  function handleFormSubmit(e) {
    e.preventDefault()
    console.log('Form submitted')
  } 

  return (
    <section className="form-container">
      <form onSubmit={handleFormSubmit}>
        <h2>Preencha os dados para criar o card:</h2>
        <TextInput required={true} label="Nome" placeholder="Digite o seu nome" />
        <TextInput required={true} label="Cargo" placeholder="Digite o seu cargo" />
        <TextInput label="Imagem" placeholder="Informe o endereço da imagem" />
        <Dropdown required={true} label="Times" itens={times} />
        <Button textContent='Criar Card'>
          Criar Card
        </Button>
      </form>
    </section>
  )
}