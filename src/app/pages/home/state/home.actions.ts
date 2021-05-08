import { createAction, props } from "@ngrx/store";

export const loadCurrentWeather = createAction(
  '[Home] Load Current Weather',
  props< {query: string} >(),
);

export const loadCurrentWeatherSuccess = createAction(
  '[Weather API] Load Current Weather Success',
  props<{ entity: any }>(),
);

export const loadCurrentWeatherFailed = createAction(
  '[Weather API] Load Current Weather Failed',
);

export function clearHomeState(clearHomeState: any, arg1: () => import("./home.reducer").HomeState): import("@ngrx/store").ReducerTypes<import("./home.reducer").HomeState, import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
  throw new Error("Function not implemented.");
}
