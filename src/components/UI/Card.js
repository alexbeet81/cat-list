import classes from "./Card.module.css";

const Card = ({ children, onClick, className }) => {
  return (
    <div className={`${classes.card} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
