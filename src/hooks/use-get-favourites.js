import axios from "axios";
import { useQuery } from "react-query";

import { baseUrl } from "../react-query/base-url";
import { apiKey } from "../react-query/api-key";
import { queryKeys } from "../react-query/query-keys";
import { subId } from "../react-query/sub-id";

const getFavourites = async () => {
  const { data } = await axios(`${baseUrl}/favourites?sub_id=${subId}`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  return data;
};

export const useGetFavourites = () => {
  const fallback = [];
  const { data = fallback, isLoading } = useQuery(queryKeys.favourites, () =>
    getFavourites()
  );

  return { data, isLoading };
};
