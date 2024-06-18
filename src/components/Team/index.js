import Card from "../Card";
import "./Team.css";

const Team = ({ teamName, primaryColor, secondaryColor, collaborators }) => {
  return collaborators.length > 0 ? (
    <section
      className="team-container"
      style={{ backgroundColor: secondaryColor }}
    >
      <h3 style={{ borderColor: primaryColor }}>{teamName}</h3>

      <div className="team-wrapper">
        {collaborators.map((collaborator) => {
          return (
            <Card
              key={collaborator.name}
              name={collaborator.name}
              role={collaborator.role}
              avatar={collaborator.avatar}
            />
          );
        })}
      </div>
    </section>
  ) : null;
};

export default Team;
