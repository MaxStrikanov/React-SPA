import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import userReducer from './user';

export default function rootReducer(history) {
    return combineReducers({
        user: userReducer,
        router: connectRouter(history),
    });
}
