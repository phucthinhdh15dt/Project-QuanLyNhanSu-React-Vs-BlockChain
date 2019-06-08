import { combineReducers } from "redux";
import personnelReducer from './Pessonnel/personnelReducers';

const appReducers =combineReducers({
    personnelReducer
});
export default appReducers;