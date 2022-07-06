import classes from "./ImageGrid.module.css";

const ImageGrid = ({images}) => {
  return (
    <div className={classes.gridContainer}>
      <div className={classes.grid}>{images}</div>
    </div>
  );
};

export default ImageGrid;
