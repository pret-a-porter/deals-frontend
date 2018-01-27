import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction } from 'redux-thunk';

import { dealsReducer, IDealsState } from './deals';

export interface IAppState {
  deals: IDealsState;
}

export interface IThunkActionCreator<T = void> extends ThunkAction<T, IAppState, void> {}

const reducer = combineReducers({
  deals: dealsReducer,
});

export function configureStore () {
  return createStore(reducer, applyMiddleware(thunk));
}
