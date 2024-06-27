import hexToRgba from "hex-to-rgba";
import Card from "../Card";
import "./Team.css";

const Team = ({ team, collaborators, onDelete, onColorChange, onFavorite }) => {
  return collaborators.length > 0 ? (
    <section
      className="team-container"
      style={{ backgroundColor: hexToRgba(team.color, "0.6") }}
    >
      <input
        type="color"
        className="input-team-color"
        onChange={(e) => onColorChange(e.target.value, team.id)}
        value={team.color}
      />

      <h3 style={{ borderColor: team.color }}>{team.name}</h3>

      <div className="team-wrapper">
        {collaborators.map((collaborator) => {
          return (
            <Card
              key={collaborator.id}
              collaborator={collaborator}
              background={team.color}
              onDelete={onDelete}
              onFavorite={onFavorite}
            />
          );
        })}
      </div>
    </section>
  ) : null;
};

export default Team;
