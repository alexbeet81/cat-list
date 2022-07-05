import classes from "./Card.module.css";

const Card = ({ children, onClick }) => {
  return (
    <div className={classes.card} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
