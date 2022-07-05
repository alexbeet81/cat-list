import Modal from "./UI/Modal";
import classes from "./BreedModal.module.css";

const BreedModal = ({ onClick, breed }) => {
  return <Modal onClose={onClick}>{breed.name}e</Modal>
};

export default BreedModal;