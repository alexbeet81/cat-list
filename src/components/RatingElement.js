import Rating from '@mui/material/Rating';
import { Fragment } from "react";
import classes from "./RatingElement.module.css";

const RatingElement = ({ name, rating }) => {
  return (
    <Fragment>
      <div className={classes.rating}>
        <h3>{name}</h3>
        <Rating name="read-only" value={rating} readOnly />
      </div>
    </Fragment>
  );
};

export default RatingElement;
