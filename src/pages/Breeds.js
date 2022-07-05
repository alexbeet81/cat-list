import { useGetBreeds } from "../hooks/use-get-breeds";
import classes from "./Breeds.module.css";
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
    return <BreedCard key={breed.id} name={breed.name} />;
  });

  if (breedsIsLoading) return <p>Loading...</p>;

  return (
    <div className={classes.container}>
      <div className={classes.grid}>{breedCards}</div>
    </div>
  );
};

export default Breeds;
