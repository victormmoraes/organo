import "./Dropdown.css";

export default function Dropdown({ label, itens, required, selectValue, onChange }) {

  function handleSelectedItem(e) {
    onChange(e.target.value);
    console.log(selectValue);
  }

  return (
    <div className="dropdown-container">
      <label>{label}</label>
      <select required={required} value={selectValue} onChange={handleSelectedItem}>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
