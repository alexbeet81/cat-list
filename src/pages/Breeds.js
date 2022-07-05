import { useGetBreeds } from "../hooks/use-get-breeds";
import classes from "./Breeds.module.css";
import BreedCard from "../components/BreedCard";
import noCatImage from "../assets/nocat.jpeg";
import { Fragment } from "react";

const Breeds = () => {
  const {
    data: breedsData,
    isLoading: breedsIsLoading,
    isError: breedsIsError,
    error: BreedsError,
  } = useGetBreeds();

  if (breedsIsLoading) return <p>Loading...</p>;
  if (breedsIsError) return <p>Error...</p>;

  const breedCards = breedsData.map((breed) => {
    let image = noCatImage;

    if (breed.image != undefined) {
      image = breed.image.url;
    }

    return <BreedCard key={breed.id} breed={breed} />;
  });

  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.grid}>{breedCards}</div>
      </div>
    </Fragment>
  );
};

export default Breeds;
