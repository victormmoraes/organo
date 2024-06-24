import { AiFillCloseCircle } from "react-icons/ai";
import "./Card.css";

const Card = ({ collaborator, background, onDelete }) => {
  return (
    <div className="card-container">
      <AiFillCloseCircle
        className="delete-button"
        onClick={() => onDelete(collaborator.id)}
        size={24}
      />

      <div className="card-header" style={{ backgroundColor: background }}>
        <img src={collaborator.avatar} alt={collaborator.name} />
      </div>

      <div className="card-content">
        <h4>{collaborator.name}</h4>
        <h5>{collaborator.role}</h5>
      </div>
    </div>
  );
};

export default Card;
