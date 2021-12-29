import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import accountReducer from './reducers/accountReducer';
import notificationsReducer from './reducers/notificationsReducer';

export interface RootState {
  account: ReturnType<typeof accountReducer>;
  notifications: ReturnType<typeof notificationsReducer>;
}

const rootReducer = combineReducers({
  account: accountReducer,
  notifications: notificationsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
