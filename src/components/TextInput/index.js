import './TextInput.css'

export default function TextInput({label, placeholder, required}) {
  return (
    <div className="text-input">
      <label>{label}</label>
      <input placeholder={placeholder} required={required}/>
    </div>
  )
}