import axios from "axios";
import { useQuery } from "react-query";

import { queryKeys } from "../react-query/query-keys";
import { baseUrl } from "../react-query/base-url";
import { apiKey } from "../react-query/api-key";

const getSearchCategories = async () => {
  const { data } = await axios(
    `${baseUrl}/images/search?category_ids=1&limit=30&page=2&order=ASC`,
    {
      headers: {
        "x-api-key": apiKey,
      },
    }
  );

  return data;
};

export const useGetSearchCategories = () => {
  const fallback = [];
  const {
    data = fallback,
    isLoading,
    isError,
    error,
  } = useQuery(queryKeys.searchCategories, () => getSearchCategories());

  return { data, isLoading, isError, error };
};
