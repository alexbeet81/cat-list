import { AiFillHeart, AiTwotoneHeart } from "react-icons/ai";
import classes from "./CatImageCard.module.css";
import Card from "./UI/Card";
import { useState } from "react";
import { usePostFavourite } from "../hooks/use-post-favourite";
import catLoading from "../assets/catloading.gif";  
import catLove from "../assets/catlove.gif";

const CatImageCard = ({ imageData, fav }) => {
  const { mutate: postFavourite, isLoading } = usePostFavourite();
  const [heartIsSelected, setHeartIsSelected] = useState(false);

  const selectHeartHandler = () => {
    setHeartIsSelected((prevState) => !prevState);
    // API add fav
    console.log(imageData.id);
    postFavourite(imageData.id);
  };

  const heartClasses = heartIsSelected
    ? `${classes.heart} ${classes.selected}`
    : classes.heart;
  const heartElement = heartIsSelected ? <AiFillHeart /> : <AiTwotoneHeart />;

  const image = fav ? imageData.image.url : imageData.url;
  const catLiked = isLoading ? catLove : image

  return (
    <Card className={classes.card}>
      <div className={heartClasses} onClick={selectHeartHandler}>
        {heartElement}
      </div>
      <div className={classes.image}>
        <img src={catLiked} alt="image" />
      </div>
    </Card>
  );
};

export default CatImageCard;
