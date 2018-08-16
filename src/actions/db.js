import { date } from "../data/counters";

export const getPersonalData = () => dispatch => {
  setTimeout(() => {
    console.log("I got data from server");
    dispatch({ type: "FETCH_DATA_FROM_SERVER_SUCCESS", payload: [1] });
  }, 2000);
};

export const getBanksOfCounter = () => dispatch => {
  setTimeout(() => {
    console.log("I got banks from server");
    const data = date;
    dispatch({ type: "BANKS_FETCH_SUCCESS", payload: data });
  }, 2000);
};
