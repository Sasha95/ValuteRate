import { combineReducers } from "redux";

import dataForDesktop from "./dataForDesktop";
import IsSidebar from "./IsSidebar";
import banksOfCounter from "./banksOfCounter";
import sidebarComponent from "./sidebarComponent";
import getEntryDataFromServer from "./entry";
import { routerReducer } from "react-router-redux";

export default combineReducers({
  routing: routerReducer,
  dataForDesktop,
  IsSidebar,
  sidebarComponent,
  banksOfCounter,
  getEntryDataFromServer
});
