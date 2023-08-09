import {ActionTypes} from '../actions/ActionTypes';
import {ListActions} from '../actions/MoviesListAction';

interface ListState {
  movies: string[];
  tv: string[];
  persons: string[];
  error: string | null;
  listLoading: boolean;
}

const initialState: ListState = {
  movies: [],
  tv: [],
  persons: [],
  error: null,
  listLoading: false,
};

const listReducer = (state: ListState = initialState, action: ListActions) => {
  switch (action.type) {
    case ActionTypes.LIST_FETCH_START:
      return {
        ...state,
        listLoading: true,
        movies: [],
        error: null,
        persons: [],
        tv: [],
      };
    case ActionTypes.MOVIES_LIST_FETCH_SUCCESS:
      return {
        ...state,
        listLoading: false,
        movies: action.payload,
        error: null,
      };
    case ActionTypes.TV_LIST_FETCH_SUCCESS:
      return {
        ...state,
        listLoading: false,
        tv: action.payload,
        error: null,
      };
    case ActionTypes.PERSONS_LIST_FETCH_SUCCESS:
      return {
        ...state,
        listLoading: false,
        persons: action.payload,
        error: null,
      };
    case ActionTypes.LIST_FETCH_ERROR:
      return {
        ...state,
        listLoading: false,
        movies: [],
        error: action.payload,
        persons: [],
        tv: [],
      };
    default:
      return state;
  }
};

export default listReducer;
