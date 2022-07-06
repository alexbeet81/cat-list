import classes from "./LoadingCat.module.css";
import catGif from "../../assets/cat.gif";

const LoadingCat = () => {
  return (
    <div className={classes.container}>
      <img src={catGif} alt="animated cat" />
    </div>
  );
};

export default LoadingCat;
