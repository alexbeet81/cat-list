import classes from "./ImageGrid.module.css";
import CatImageCard from "./CatImageCard";

const ImageGrid = ({ data }) => {
  const catImageCards = data.map((imageData) => {
    return <CatImageCard key={imageData.id} imageData={imageData} />;
  });

  return (
    <div className={classes.gridContainer}>
      <div className={classes.grid}>{catImageCards}</div>
    </div>
  );
};

export default ImageGrid;
