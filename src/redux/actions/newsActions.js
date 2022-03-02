import { getImg, searchImg } from "../../api";
import { dispatch } from "../store";
import { ADD_PHOTOS, SET_ERROR, SET_LOADING, SET_PHOTOS } from "../types";

export const setLoading = (state) => {
  dispatch({ type: SET_LOADING, payload: state });
};

export const setError = (state) => {
  dispatch({ type: SET_ERROR, payload: state });
};

export const getImages = async (page, search, add) => {
  setError(false);
  let data =
    search == "all"
      ? await getImg(parseInt(page))
      : await searchImg(parseInt(page), search);

  if (data.success)
    dispatch({
      type: add ? ADD_PHOTOS : SET_PHOTOS,
      payload: data.data.photos,
    });
  else setError(true);
  setLoading(false);
};
