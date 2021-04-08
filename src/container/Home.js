import Home from '../screen/Home';
import { connect } from 'react-redux';
import { getWeather } from '../redux/actions';

/*========================================================
    * function Name: Home screen
    * function Purpose: called action and stored state
    * function Parameters: mapStateToProps, dispatchers
    * function ReturnType: state
    * function Description: called action of dispatchers and stored state of mapStateToProps
    *=====================================================*/

const mapStateToProps = state => ({
    loading: state.weather.loading,
    weatherData: state.weather.weatherData,
    weatherErrorMsg: state.weather.weatherErrorMsg
});

const mapDispatchToProps = {
    getWeather
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);