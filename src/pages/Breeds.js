import { useGetBreeds } from "../hooks/use-get-breeds";
import classes from "./Breeds.module.css";
import BreedCard from "../components/BreedCard";
import noCatImage from "../assets/nocat.jpeg";

const Breeds = () => {
  const {
    data: breedsData,
    isLoading: breedsIsLoading,
    isError: breedsIsError,
    error: BreedsError,
  } = useGetBreeds();

  const breedCards = breedsData.map((breed) => {
    console.log(breed);
    // const image = breed.image.url

    return <BreedCard key={breed.id} name={breed.name} image={noCatImage} />;
  });

  if (breedsIsLoading) return <p>Loading...</p>;

  return (
    <div className={classes.container}>
      <div className={classes.grid}>{breedCards}</div>
    </div>
  );
};

export default Breeds;
