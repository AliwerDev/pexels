import {
  SET_CATEGORY,
  SET_ERROR,
  SET_LOADING,
  ADD_PHOTOS,
  SET_PHOTOS,
} from "../types";

const initialState = {
  categories: [
    {
      name: "All",
      img: "https://freehtml5.co/wp-content/uploads/2018/05/7.-Pexels.png",
    },
    {
      name: "Nature",
      img: "https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg",
    },
    {
      name: "Cars",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cars-sit-on-the-lot-at-the-mcgrath-honda-dealership-on-news-photo-1620243034.",
    },
    {
      name: "Sport",
      img: "https://image.shutterstock.com/image-vector/color-sport-background-football-basketball-260nw-1315841180.jpg",
    },
    {
      name: "Transport",
      img: "https://www.learnaboutlogistics.com/wp-content/uploads/2016/09/photodune-10122971-transport-logistics-s-e1474446381193-742x353.jpg",
    },
    {
      name: "Animals",
      img: "https://images.news18.com/ibnlive/uploads/2021/10/animal-day-16332888954x3.jpg",
    },
  ],
  photos: [],
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case ADD_PHOTOS:
      return { ...state, photos: [...state.photos, ...action.payload] };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_PHOTOS:
      return { ...state, photos: action.payload };

    default:
      return state;
  }
};

export default photosReducer;
