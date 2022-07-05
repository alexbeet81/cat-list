import classes from "./BreedCard.module.css";
import Card from "./UI/Card";

const BreedCard = ({ image, name }) => {

  let fntSize = "1.5rem"

  if (name.length > 13) {
    fntSize = "1.3rem"
  }

  if (name.length > 15) {
    fntSize = "1.2rem"
  }

  if (name.length > 18) {
    fntSize = "1rem"
  }

  return (
    <Card className={classes.card}>
      <img src={image} alt={name}/>
      <div className={classes.breedName}>
        <h2 style={{ fontSize: fntSize }}>{name}</h2>
      </div>
    </Card>
  );
};

export default BreedCard;
