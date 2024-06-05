import './Dropdown.css'

export default function Dropdown({label, itens}) {
  return (
    <div className='dropdown-container'>
      <label>{label}</label>
      <select>
          {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}