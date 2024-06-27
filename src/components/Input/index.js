import "./Input.css";

export default function Input({
  label,
  placeholder,
  required,
  iptValue,
  onChange,
  type = "text",
}) {
  function handleInputChange(e) {
    onChange(e.target.value);
  }

  return (
    <div className={`input input-${type}`}>
      <label>{label}</label>
      <input
        onChange={handleInputChange}
        placeholder={placeholder}
        required={required}
        value={iptValue}
        type={type}
      />
    </div>
  );
}
