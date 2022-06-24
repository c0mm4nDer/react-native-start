import { combineReducers } from "redux";
import counter from './system/reducers';

const RootReducers = combineReducers({
    counter,
});

export default RootReducers;
