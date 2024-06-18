import "./Dropdown.css";

export default function Dropdown({ label, itens, required, selectValue, onChange }) {

  function handleSelectedItem(e) {
    onChange(e.target.value);
  }

  return (
    <div className="dropdown-container">
      <label>{label}</label>
      <select required={required} value={selectValue} onChange={handleSelectedItem}>
        <option value=""></option>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
