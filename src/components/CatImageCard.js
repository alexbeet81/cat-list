import { AiTwotoneHeart } from "react-icons/ai";
import { GiDeathSkull } from "react-icons/gi";
import classes from "./CatImageCard.module.css";
import Card from "./UI/Card";
import { useState } from "react";
import { usePostFavourite } from "../hooks/use-post-favourite";
import { useDeleteFavourite } from "../hooks/use-delete-favourite";
import catLoading from "../assets/catloading.gif";
import lovingCat from "../assets/catlove.gif";

const CatImageCard = ({ imageData, fav }) => {
  const { mutate: postFavourite, isLoading: postIsLoading } =
    usePostFavourite();
  const { mutate: deleteFavourite, isLoading: deleteIsLoading } =
    useDeleteFavourite();
  const [heartIsSelected, setHeartIsSelected] = useState(false);

  const selectHeartHandler = () => {
    setHeartIsSelected((prevState) => !prevState);
    // API add fav
    postFavourite(imageData.id);
  };

  const deleteFavouriteHandler = () => {
    deleteFavourite(imageData.id);
  };

  const heartClasses = heartIsSelected
    ? `${classes.heart} ${classes.heartHover}`
    : classes.heart;

  const heartElement = fav ? <GiDeathSkull /> : <AiTwotoneHeart />;

  const image = fav ? imageData.image.url : imageData.url;

  let selcetedImage = image;
  if (postIsLoading) selcetedImage = lovingCat;
  if (deleteIsLoading) selcetedImage = catLoading;

  // const catLiked = postIsLoading ? lovingCat : image

  const mouseOverHandler = () => {
    setHeartIsSelected(true);
  };

  const mouseOutHandler = () => {
    setHeartIsSelected(false);
  };

  const onClickFuction = fav ? deleteFavouriteHandler : selectHeartHandler;

  return (
    <Card
      className={classes.card}
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
      onClick={onClickFuction}
    >
      <div className={heartClasses}>
        {heartElement}
      </div>
      <div className={classes.image}>
        <img src={selcetedImage} alt="cat" />
      </div>
    </Card>
  );
};

export default CatImageCard;
