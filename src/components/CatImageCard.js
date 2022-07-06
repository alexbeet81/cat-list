import classes from "./CatImageCard.module.css";
import Card from "./UI/Card";

const CatImageCard = ({ imageData }) => {
  return (
    <Card className={classes.card}>
      <div className={classes.image}>
        <img src={imageData.url} alt="image" />
      </div>
    </Card>
  );
};

export default CatImageCard;
