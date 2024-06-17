import "./Team.css";

const Team = ({ teamName, primaryColor, secondaryColor }) => {
  return (
    <section
      className="team-container"
      style={{ backgroundColor: secondaryColor }}
    >
      <h3 style={{ borderColor: primaryColor }}>{teamName}</h3>
    </section>
  );
};

export default Team;
