import { createStore } from 'redux';
import postReducer from './Reducer Use';

const store = createStore(postReducer);

export default store;
