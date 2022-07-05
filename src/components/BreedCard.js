import classes from "./BreedCard.module.css";
import Card from "./UI/Card";

const BreedCard = () => {
  return (
    <Card className={classes.card}>
      <div className={classes.breedName}>
        <h2>Breed Name</h2>
      </div>
    </Card>
  );
};

export default BreedCard;
