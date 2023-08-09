import {ActionTypes} from '../actions/ActionTypes';
import {
  movideDetailAPI,
  movieDetailsAction,
} from './../actions/MovieDetailsAction';

export interface movieDetailState {
  movieDetails: movideDetailAPI;
  movieError: string | null;
  movieLoading: boolean;
}

const initialState = {
  movieDetails: {},
  movieError: null,
  movieLoading: false,
};

const movideDetailReducer = (
  state = initialState as any,
  action: movieDetailsAction,
) => {
  switch (action.type) {
    case ActionTypes.MOVIE_DETAIL_FETCH_START:
      return {
        ...state,
        movieLoading: true,
      };
    case ActionTypes.MOVIE_DETAIL_FETCH_SUCCESS:
      return {
        ...state,
        movieLoading: false,
        movieDetails: action.payload,
        movieError: null,
      };
    case ActionTypes.MOVIE_DETAIL_FETCH_ERROR:
      return {
        ...state,
        movieDetails: {},
        movieLoading: false,
        movieError: action.payload,
      };
    default:
      return state;
  }
};

export default movideDetailReducer;
