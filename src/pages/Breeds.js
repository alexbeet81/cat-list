import { useGetBreeds } from "../hooks/use-get-breeds";
// import classes from "./Breeds.module.css";
import BreedCard from "../components/BreedCard";

const Breeds = () => {
  const {
    data: breedsData,
    isLoading: breedsIsLoading,
    isError: breedsIsError,
    error: BreedsError,
  } = useGetBreeds();

  console.log(breedsData);

  const breedCards = breedsData.map((breed) => {
    return <BreedCard name={breed.name}/>;
  });

  return <div>{breedCards}</div>;
};

export default Breeds;
