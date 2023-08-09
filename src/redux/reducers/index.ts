import {AnyAction, combineReducers} from 'redux';
import listReducer from './ListReducer';
import movideDetailReducer from './MovieDetailsReducer';
import {ThunkDispatch} from 'redux-thunk';
import store from '../store';
import {useDispatch} from 'react-redux';
import trendingReducer from './TrendingReducer';

export const rootReducer = combineReducers({
  list: listReducer,
  movieDetails: movideDetailReducer,
  trending: trendingReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
// export type TypedDispatch = typeof store.dispatch;
// export const useTypedDispatch = () => useDispatch<TypedDispatch>();
