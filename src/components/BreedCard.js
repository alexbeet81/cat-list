import { Fragment } from "react";
import BreedModal from "./BreedModal";
import classes from "./BreedCard.module.css";
import Card from "./UI/Card";
import { useState } from 'react';

const BreedCard = ({ image, name, onClick }) => {
  const [modalIsShown, setModalIsShown] = useState(false)

  let fntSize = "1.5rem";

  if (name.length > 13) {
    fntSize = "1.3rem";
  }

  if (name.length > 15) {
    fntSize = "1.2rem";
  }

  if (name.length > 18) {
    fntSize = "1rem";
  }

  const showBreedModalHandler = () => {
    setModalIsShown(true);
  };

  const hideBreedModalHandler = () => {

  };

  return (
    <Fragment>
      {modalIsShown && <BreedModal />}
      <Card onClick={showBreedModalHandler} className={classes.card}>
        <div className={classes.gradient}>
          <img src={image} alt={name} className={classes.overlay} />
        </div>
        <div className={classes.breedName}>
          <h2 style={{ fontSize: fntSize }}>{name}</h2>
        </div>
      </Card>
    </Fragment>
  );
};

export default BreedCard;
