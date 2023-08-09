import {TrendingAction} from '../actions/TrendingAction';
import {ActionTypes} from '../actions/ActionTypes';

export interface TrendingState {
  trendings: string[];
  trendLoading: boolean;
  trendError: string | null;
}

const initialState: TrendingState = {
  trendings: [],
  trendLoading: false,
  trendError: '',
};

const trendingReducer = (state = initialState, action: TrendingAction) => {
  switch (action.type) {
    case ActionTypes.TRENDING_FETCH_START:
      return {
        ...state,
        trendLoading: true,
        trendings: [],
        trendError: null,
      };
    case ActionTypes.TRENDING_FETCH_SUCCESS:
      return {
        ...state,
        trendLoading: false,
        trendings: action.payload,
        trendError: null,
      };
    case ActionTypes.TRENDING_FETCH_ERORR:
      return {
        ...state,
        trendLoading: false,
        trendings: [],
        trendError: action.payload,
      };
    default:
      return state;
  }
};

export default trendingReducer;
