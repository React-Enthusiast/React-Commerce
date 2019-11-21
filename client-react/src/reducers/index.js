import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import details from "./detail";
import product from "./product";

export default history => combineReducers({
  router: connectRouter(history),
  details,
  product
});     