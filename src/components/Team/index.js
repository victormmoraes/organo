import hexToRgba from "hex-to-rgba";
import Card from "../Card";
import "./Team.css";

const Team = ({ teamName, color, collaborators, onDelete, onColorChange }) => {
  return collaborators.length > 0 ? (
    <section
      className="team-container"
      style={{ backgroundColor: hexToRgba(color, '0.6') }}
    >
      <input
        type="color"
        className="input-color"
        onChange={(e) => onColorChange(e.target.value, teamName)}
        value={color}
      />

      <h3 style={{ borderColor: color }}>{teamName}</h3>

      <div className="team-wrapper">
        {collaborators.map((collaborator) => {
          return (
            <Card
              key={collaborator.name}
              name={collaborator.name}
              role={collaborator.role}
              avatar={collaborator.avatar}
              background={color}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </section>
  ) : null;
};

export default Team;
