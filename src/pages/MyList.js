import { useGetFavourites } from "../hooks/use-get-favourites";
import classes from "./MyList.module.css";
import ImageGrid from "../components/ImageGrid";

const MyList = () => {
  const { data: favouritesData, isLoading: favouritesIsLoading } =
    useGetFavourites();

  if (favouritesIsLoading) return <p>Loading..</p>;

  return <ImageGrid data={favouritesData} fav={true} />;
};

export default MyList;
