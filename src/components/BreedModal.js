import noCatImage from "../assets/nocat.jpeg";
import Modal from "./UI/Modal";
import classes from "./BreedModal.module.css";

const BreedModal = ({ onClick, breed }) => {
  console.log(breed);
  let image = noCatImage;

  if (breed.image != undefined) {
    image = breed.image.url;
  }

  return (
    <Modal onClose={onClick}>
      <div className={classes.container}>
        <div className={classes.image}>
          <img src={image} alt={breed.name} />
        </div>
        <div className={classes.nameContainer}>
          <h2>{breed.name}</h2>
        </div>
        <div className={classes.description}>
          <p>{breed.description}</p>
        </div>
        <div className={classes.lifeSpan}>
          <h4>Life span: {breed.life_span} years</h4>
        </div>
        <div className={classes.stat}>
          <h3>Lap friendly</h3>
        </div>
      </div>
    </Modal>
  );
};

export default BreedModal;
