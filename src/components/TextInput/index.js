import './TextInput.css'

export default function TextInput({label, placeholder, required, iptValue, onChange}) {

  function handleInputChange(e) {
    onChange(e.target.value)
  }

  return (
    <div className="text-input">
      <label>{label}</label>
      <input onChange={handleInputChange} placeholder={placeholder} required={required} value={iptValue}/>
    </div>
  )
}