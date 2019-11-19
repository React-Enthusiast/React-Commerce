import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import detail from "./detail";
import product from "./product";

export default history => combineReducers({
  router: connectRouter(history),
  detail,
  product
});