import { AiOutlineHeart, AiFillHeart, AiTwotoneHeart } from "react-icons/ai";
import classes from "./CatImageCard.module.css";
import Card from "./UI/Card";
import { useState } from "react";

const CatImageCard = ({ imageData }) => {
  const [heartIsSelected, setHeartIsSelected] = useState(false);

  const selectHeartHandler = () => {
    setHeartIsSelected((prevState) => !prevState);
  };

  const heartClasses = heartIsSelected
    ? `${classes.heart} ${classes.selected}`
    : classes.heart;
  const heartElement = heartIsSelected ? <AiFillHeart /> : <AiTwotoneHeart />;

  return (
    <Card className={classes.card}>
      <div className={heartClasses} onClick={selectHeartHandler}>
        {heartElement}
      </div>
      <div className={classes.image}>
        <img src={imageData.url} alt="image" />
      </div>
    </Card>
  );
};

export default CatImageCard;
