import axios from "axios";
import { useMutation } from "react-query";

import { baseUrl } from "../react-query/base-url";
import { apiKey } from "../react-query/api-key";
import { queryKeys } from "../react-query/query-keys";
import { subId } from "../react-query/sub-id";

const postFavourite = async (imageId) => {
  const imageData = {
    image_id: imageId,
    value: 1,
    sub_id: subId,
  };

  await axios.post(`${baseUrl}/favourites`, imageData, {
    headers: {
      "x-api-key": apiKey,
    },
  });
};

export const usePostFavourite = (imageId) => {
  useMutation(() => postFavourite(imageId));
}