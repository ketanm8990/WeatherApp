
import * as types from './types';

// getWeather
export const getWeather = (lat, log) => {
    return async (dispatch) => {
        dispatch({ type: types.WEATHER_LOADING, payload: true })
        const response = await fetch(`http://api.openweathermap.org/data/2.5/find?units=metric&lat=${lat}&lon=${log}&cnt=50&appid=c0b2dfb6175c4490bdbb9ae5fec0b3b5`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let res = await response.json();        
        dispatch({ type: types.WEATHER_LOADING, payload: false })
        if (res?.cod == "200") {
            dispatch({ type: types.WEATHER_SUCCESS, payload: res.list })
        } else {
            dispatch({ type: types.WEATHER_FAIL, payload: 'No data found' })
        }        
    }
}