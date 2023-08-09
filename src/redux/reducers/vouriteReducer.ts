import {favouriteAction} from './../actions/Favourites';
import {ActionTypes} from '../actions/ActionTypes';

export interface favouriteState {
  favourites: [];
}

const initialState = {
  favourites: [],
};

const favouriteReducer = (state = initialState, action: favouriteAction) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVOURITE:
      return;
    case ActionTypes.REMMOVE_FAVOURITE:
      return;
    default:
      return state;
  }
};

export default favouriteReducer;
