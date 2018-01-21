import { combineReducers, createStore } from 'redux';
import countriesReducer  from './countries-reducer';
const store = createStore(countriesReducer);

const reducers = combineReducers({
    countriesReducer
});
store.subscribe(() => console.log(store.getState()));

export default reducers;