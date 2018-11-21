import * as types from "./types";

export function fetchCharacters() {
  return async dispatch => {
    await dispatch({ type: types.CHARACTER_FETCH_START });
  };
}
