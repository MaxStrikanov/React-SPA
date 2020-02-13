import * as c from '../constants';
import axios from 'axios';

const actions = {
    saveUserInputValue(value) {
        return {
            value,
            type: c.USER_INPUT_LOGIN_CHANGED,
        };
    },
    onLogin() {
        return {
            type: c.USER_TRY_TO_LOG_IN,
        };
    },
    fetchUsers() {
        return async (dispatch, getStore) => {
            const store = getStore();
            dispatch({
                type: c.GET_USERS_LOADING,
            });

            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                dispatch({
                    type: c.GET_USERS_SUCCESS,
                    users: response.data,
                });
            } catch (e) {
                dispatch({
                    type: c.GET_USERS_FAILED,
                    errMsg: e.message,
                });
            }
        };
    },
};

export default actions;
