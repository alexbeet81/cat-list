import axios from "axios";
import { useMutation } from "react-query";

import { baseUrl } from "../react-query/base-url";
import { apiKey } from "../react-query/api-key";
import { queryKeys } from "../react-query/query-keys";
import { subId } from "../react-query/sub-id";

const postFavourite = async (imageId) => {
    const imageData = {
    image_id: imageId,
    sub_id: subId,
  };

  await axios.post(`${baseUrl}/favourites`, imageData, {
    headers: {
      "x-api-key": apiKey,
    },
  });
};

export const usePostFavourite = () => {
  const { mutate, isSuccess, isLoading } = useMutation((imageId) =>
    postFavourite(imageId)
  );

  return { mutate, isSuccess, isLoading };
};
