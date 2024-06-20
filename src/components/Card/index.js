import { AiFillCloseCircle } from "react-icons/ai";
import "./Card.css";

const Card = ({ name, role, avatar, background, onDelete }) => {
  return (
    <div className="card-container">
      <AiFillCloseCircle
        className="delete-button"
        onClick={onDelete}
        size={24}
      />
      
      <div className="card-header" style={{ backgroundColor: background }}>
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
