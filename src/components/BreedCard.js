import { useState } from "react";

import noCatImage from "../assets/nocat.jpeg";
import { Fragment } from "react";
import BreedModal from "./BreedModal";
import classes from "./BreedCard.module.css";
import Card from "./UI/Card";

const BreedCard = ({ breed }) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  let image = noCatImage;

  if (breed.image != undefined) {
    image = breed.image.url;
  }

  let fntSize = "1.5rem";

  if (breed.name.length > 13) {
    fntSize = "1.3rem";
  }

  if (breed.name.length > 15) {
    fntSize = "1.2rem";
  }

  if (breed.name.length > 18) {
    fntSize = "1rem";
  }

  const showBreedModalHandler = () => {
    setModalIsShown(true);
  };

  const hideBreedModalHandler = () => {
    setModalIsShown(false);
  };

  return (
    <Fragment>
      {modalIsShown && (
        <BreedModal onClick={hideBreedModalHandler} breed={breed} />
      )}
      <Card onClick={showBreedModalHandler} className={classes.card}>
        <div className={classes.gradient}>
          <img src={image} alt={breed.name} className={classes.overlay} />
        </div>
        <div className={classes.breedName}>
          <h2 style={{ fontSize: fntSize }}>{breed.name}</h2>
        </div>
      </Card>
    </Fragment>
  );
};

export default BreedCard;
