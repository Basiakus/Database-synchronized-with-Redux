import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducer';

const reducers = combineReducers({
    countriesReducer
});
store.subscribe(() => console.log(store.getState()));
export default reducers;