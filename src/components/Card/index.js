import "./Card.css";

const Card = ({ name, role, avatar }) => {
  return (
    <div className="card-container">
      <div className="card-header">
        <img src={avatar} alt={name} />
      </div>

      <div className="card-content">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Card;
