import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./Card.css";
import { BiHeart } from "react-icons/bi";

const Card = ({ collaborator, background, onDelete, onFavorite }) => {
  function favorite() {
    onFavorite(collaborator.id);
  }

  const propsFavorite = {
    size: 24,
    onClick: favorite,
  };

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
        <div className="favorite">
          {collaborator.favorite ? (
            <AiFillHeart {...propsFavorite} color='#ff0000' />
          ) : (
            <AiOutlineHeart {...propsFavorite} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
