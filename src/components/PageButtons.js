import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import classes from "./PageButtons.module.css";

const PageButtons = ({ leftClick, rightClick, currentPage }) => {

  let disableButton = false;

  if (currentPage <= 1) {
    disableButton = true;
  }

  return (
    <div className={classes.buttonBox}>
      <button className={classes.leftArrow} onClick={leftClick} disabled={disableButton}>
        <BsArrowLeftCircle />
      </button>
      <h2>Page {currentPage}</h2>
      <button className={classes.rightArrow} onClick={rightClick}>
        <BsArrowRightCircle />
      </button>
    </div>
  );
};

export default PageButtons;
