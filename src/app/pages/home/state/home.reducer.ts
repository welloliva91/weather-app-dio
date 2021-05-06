import { Action, createReducer, on } from "@ngrx/store"

import * as fromHomeActions from './home.actions';

export interface HomeState {
  text: string;
  text2: string;
}

export const homeInitialState: HomeState = {
  text: 'São Paulo',
  text2: 'Conchas',
}

const reducer = createReducer(
  homeInitialState,
);

export function homeReducer(state: HomeState | undefined, action: Action): HomeState {
  return reducer(state, action);
}