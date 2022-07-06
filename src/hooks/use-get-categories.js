import axios from "axios";
import { useQuery } from "react-query";

import { apiKey } from "../react-query/api-key";
import { queryKeys } from "../react-query/query-keys";
import { baseUrl } from "../react-query/base-url";

const getCategories = async () => {
  const { data } = await axios(`${baseUrl}/categories`, {
    headers: {
      "x-api-key": apiKey,
    },
  });

  return data;
};

export const useGetCategoies = () => {
  const fallback = [];
  const {
    data = fallback,
    isLoading,
    isError,
    error,
  } = useQuery(queryKeys.categories, () => getCategories());

  return { data, isLoading, isError, error };
};
