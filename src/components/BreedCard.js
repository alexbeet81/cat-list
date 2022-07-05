import classes from "./BreedCard.module.css";
import Card from "./UI/Card";

const BreedCard = ({ name }) => {

  const fntSize = name.length > 15 ? "1.2rem" : "1.5rem"

  return (
    <Card className={classes.card}>
      <div className={classes.breedName}>
        <h2 style={{ fontSize: fntSize }}>{name}</h2>
      </div>
    </Card>
  );
};

export default BreedCard;
