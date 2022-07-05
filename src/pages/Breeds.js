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

  if (breedsIsLoading) return <p>Loading...</p>;
  if (breedsIsError) return <p>Error...</p>

  const breedCards = breedsData.map((breed) => {

    let image = noCatImage;

    if (breed.image != undefined) {
      image = breed.image.url
    }

    return <BreedCard key={breed.id} name={breed.name} image={image} />;
  });

  return (
    <div className={classes.container}>
      <div className={classes.grid}>{breedCards}</div>
    </div>
  );
};

export default Breeds;
