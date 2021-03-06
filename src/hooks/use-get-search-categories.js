import axios from "axios";
import { useQuery } from "react-query";

import { queryKeys } from "../react-query/query-keys";
import { baseUrl } from "../react-query/base-url";
import { apiKey } from "../react-query/api-key";

const CATID = {
  boxes: 5,
  clothes: 15,
  hats: 1,
  sinks: 14,
  space: 2,
  sunglasses: 4,
  ties: 7,
};

const getSearchCategories = async (categoryId, currentPage) => {
  const { data } = await axios(
    `${baseUrl}/images/search?category_ids=${CATID[categoryId]}&limit=15&page=${currentPage}&order=ASC`,
    {
      headers: {
        "x-api-key": apiKey,
      },
    }
  );

  return data;
};

export const useGetSearchCategories = (categoryId, currentPage) => {
  const fallback = [];
  const {
    data = fallback,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery([queryKeys.searchCategories, currentPage], () =>
    getSearchCategories(categoryId, currentPage)
  );

  return { data, isLoading, isError, error, refetch };
};
