
import * as types from '../actions/types';

/*========================================================
     * function Name: homeReducer.js 
     * function Purpose: state management
     * function Parameters: state and action
     * function ReturnType: action type and payload
     * function Description: api calling response action type and set payload of state stored in homeReducer.js
     *=====================================================*/

const INITIAL_STATE = {
    loading: false,
    weatherData: null,
    weatherErrorMsg: null,
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.WEATHER_LOADING:
            return { ...state, loading: action.payload };
        case types.WEATHER_SUCCESS:
            return { ...state, weatherData: action.payload };
        case types.WEATHER_FAIL:
                return { ...state, weatherErrorMsg: action.payload };
        default:
            return state;
    }
};

