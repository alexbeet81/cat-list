import { AiFillHeart, AiTwotoneHeart } from "react-icons/ai";
import classes from "./CatImageCard.module.css";
import Card from "./UI/Card";
import { useState } from "react";
import { usePostFavourite } from "../hooks/use-post-favourite";
import { useDeleteFavourite } from '../hooks/use-delete-favourite';
import catLoading from "../assets/catloading.gif";  
import lovingCat from "../assets/catlove.gif";

const CatImageCard = ({ imageData, fav }) => {
  const { mutate: postFavourite, isLoading: postIsLoading } = usePostFavourite();
  const { mutate: deleteFavourite, isLoading: deleteIsLoading } = useDeleteFavourite();
  const [heartIsSelected, setHeartIsSelected] = useState(false);

  console.log(imageData);

  const selectHeartHandler = () => {
    setHeartIsSelected((prevState) => !prevState);
    // API add fav
    postFavourite(imageData.id);
  };

  const deleteFavouriteHandler = () => {
    deleteFavourite(imageData.id);
  }

  const heartClasses = heartIsSelected
    ? `${classes.heart} ${classes.selected}`
    : classes.heart;
  
  const heartElement = heartIsSelected ? <AiFillHeart /> : <AiTwotoneHeart />;

  const image = fav ? imageData.image.url : imageData.url;

  let selcetedImage = image;
  if (postIsLoading) selcetedImage = lovingCat;
  if (deleteIsLoading) selcetedImage = catLoading;

  // const catLiked = postIsLoading ? lovingCat : image

  const testHandler = () => {
    console.log('test')
  };

  const onClickFuction = fav ? deleteFavouriteHandler : selectHeartHandler;

  return (
    <Card className={classes.card} onMouseOver={testHandler}>
    <div className={heartClasses} onClick={onClickFuction}>
        {heartElement}
      </div>
      <div className={classes.image}>
        <img src={selcetedImage} alt="image" />
      </div>
    </Card>
  );
};

export default CatImageCard;
