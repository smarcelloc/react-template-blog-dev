import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import accountReducer from './reducers/accountReducer';

export interface RootState {
  account: ReturnType<typeof accountReducer>;
}

const rootReducer = combineReducers({
  account: accountReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
