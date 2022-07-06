import classes from "./ImageGrid.module.css";
import CatImageCard from "./CatImageCard";

const ImageGrid = ({ data, fav }) => {

  const catImageCards = data.map((imageData) => {
    return <CatImageCard key={imageData.id} imageData={imageData} fav={fav} />;
  });

  return (
    <div className={classes.gridContainer}>
      <div className={classes.grid}>{catImageCards}</div>
    </div>
  );
};

export default ImageGrid;
