export default function getEntryDataFromServer(state = false, action) {
  switch (action.type) {
    case "ENTRY_SUCCESS":
      return action.payload;
    case "ENTRY_FAILED":
      return action.payload;
    default:
      return state;
  }
}
