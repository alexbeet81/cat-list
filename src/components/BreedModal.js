import RatingElement from './RatingElement';
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
      <div className={classes.container} onClick={onClick}>
        <div className={classes.image}>
          <img src={image} alt={breed.name} />
        </div>
        <div className={classes.nameContainer}>
          <img src={`https://countryflagsapi.com/svg/${breed.country_code}`} alt="test" />
          <h2>{breed.name}</h2>
        </div>
        <div className={classes.description}>
          <p>{breed.description}</p>
        </div>
        <div className={classes.lifeSpan}>
          <h4>Life span: {breed.life_span} years</h4>
        </div>
        <RatingElement name="Adaptability" rating={breed.adaptability}/>
        <RatingElement name="Affection" rating={breed.affection_level}/>
        <RatingElement name="Child Friendly" rating={breed.child_friendly}/>
        <RatingElement name="Energy Level" rating={breed.energy_level}/>
        <RatingElement name="Intelligence" rating={breed.intelligence}/>
        <RatingElement name="Stranger friendly" rating={breed.stranger_friendly}/>
      </div>
    </Modal>
  );
};

export default BreedModal;
