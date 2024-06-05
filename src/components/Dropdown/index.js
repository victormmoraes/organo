import './Dropdown.css'

export default function Dropdown({label, itens, required}) {
  return (
    <div className='dropdown-container'>
      <label>{label}</label>
      <select required={required}>
          {itens.map(item => <option key={item}>{item}</option>)}
      </select>
    </div>
  )
}