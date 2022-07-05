import axios from "axios";
import { useQuery } from "react-query";

import { baseUrl } from "../react-query/base-url";
import { apiKey } from "../react-query/api-key";
import { queryKeys } from "../react-query/query-keys";

const getBreeds = async () => {
  const { data } = await axios(`${baseUrl}/breeds`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  return data;
};

export const useGetBreeds = () => {
  const fallback = [];
  const {
    data = fallback,
    isLoading,
    isError,
    error,
  } = useQuery(queryKeys.breeds, () => getBreeds());

  return { data, isLoading, isError, error };
};
