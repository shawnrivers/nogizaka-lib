export namespace CdsActions {
  export enum Type {
    FETCH_SINGLES = "FETCH_SINGLES",
    FETCH_ALBUMS = "FETCH_ALBUMS"
  }

  export type Action =
    | { type: Type.FETCH_SINGLES; payload: [] }
    | { type: Type.FETCH_ALBUMS; payload: [] };

  export const fetchSingles = () => {
    return (dispatch: any) => {
      fetch(
        "https://raw.githubusercontent.com/shawnrivers/nogizaka-data/master/src/json/singles.json"
      )
        .then(response => response.json())
        .then(singles =>
          dispatch({
            type: Type.FETCH_SINGLES,
            payload: singles
          })
        )
        .catch(error => console.log(error));
    };
  };
}
