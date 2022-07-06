import classes from "./Card.module.css";

const Card = ({ children, onClick, className, onMouseOver, onMouseOut }) => {
  return (
    <div
      className={`${classes.card} ${className}`}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {children}
    </div>
  );
};

export default Card;
