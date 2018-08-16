export const SideEntry = (email, password) => dispatch => {
  setTimeout(() => {
    console.log("Get data for entry");
    console.log(email, password);
    const accsess = true;
    if (accsess) {
      dispatch({
        type: "ENTRY_SUCCESS",
        payload: { check: true, name: "Александр", valute: "$", score: 1567 }
      });
    } else {
      dispatch({ type: "ENTRY_FAILED", payload: false });
    }
  }, 200);
};
