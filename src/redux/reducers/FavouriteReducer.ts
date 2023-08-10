import {favouriteAction} from '../actions/Favourites';
import {ActionTypes} from '../actions/ActionTypes';

export interface favouriteState {
  favourites: [];
}

const initialState: favouriteState = {
  favourites: [],
};

const favouriteReducer = (state = initialState, action: favouriteAction) => {
  switch (action.type) {
    case ActionTypes.ADD_FAVOURITE:
      let favState = [...state.favourites];
      favState;
    case ActionTypes.REMMOVE_FAVOURITE:
      return;
    default:
      return state;
  }
};

export default favouriteReducer;
