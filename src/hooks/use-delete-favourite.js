import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

import { baseUrl } from "../react-query/base-url";
import { apiKey } from "../react-query/api-key";
import { queryKeys } from "../react-query/query-keys";
import { subId } from "../react-query/sub-id";

const deleteFavourite = async (id) => {
  await axios.delete(`${baseUrl}/favourites/${id}`, {
    headers: {
      "x-api-key": apiKey,
    },
  });
};

export const useDeleteFavourite = () => {
  const queryClient = useQueryClient();
  const { mutate, isSuccess, isLoading } = useMutation(
    (id) => deleteFavourite(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.favourites]);
      },
    }
  );

  return { mutate, isSuccess, isLoading };
};
