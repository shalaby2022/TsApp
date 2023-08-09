export enum ActionTypes {
  LIST_FETCH_START = 'LIST_FETCH_START',
  MOVIES_LIST_FETCH_SUCCESS = 'MOVIES_LIST_FETCH_SUCCESS',
  TV_LIST_FETCH_SUCCESS = 'TV_LIST_FETCH_SUCCESS',
  PERSONS_LIST_FETCH_SUCCESS = 'PERSONS_LIST_FETCH_SUCCESS',
  LIST_FETCH_ERROR = 'LIST_FETCH_ERROR',

  MOVIE_DETAIL_FETCH_START = 'MOVIE_DETAIL_FETCH_START',
  MOVIE_DETAIL_FETCH_SUCCESS = 'MOVIE_DETAIL_FETCH_SUCCESS',
  MOVIE_DETAIL_FETCH_ERROR = 'MOVIE_DETAIL_FETCH_ERROR',

  TRENDING_FETCH_START = 'TRENDING_FETCH_START',
  TRENDING_FETCH_SUCCESS = 'TRENDING_FETCH_SUCCESS',
  TRENDING_FETCH_ERORR = 'TRENDING_FETCH_ERORR',

  ADD_FAVOURITE = 'ADD_FAVOURITE',
  REMMOVE_FAVOURITE = 'REMMOVE_FAVOURITE',
}