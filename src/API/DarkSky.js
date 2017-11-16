import axios from 'axios';
import moment from 'moment';

export const getWeather = ({ commuteDate, tempHi, tempLow, precipProbabilityCommute }) => {
  const url = `https://1miudhz7a9.execute-api.us-east-1.amazonaws.com/dev/forecast/38.9072,-77.0369,${commuteDate}`;
  return axios.get(url)
    .then((weather) => {
      // 'mode' is the flag that determines whether you ride a bike or the metro
      // if precipProbability is NaN, its condition is set to true
      const mode = (
        weather.data.currently.temperature <= tempHi &&
        weather.data.currently.temperature >= tempLow &&
        (isNaN(weather.data.currently.precipProbability) ?
         true : weather.data.currently.precipProbability < precipProbabilityCommute) ? 'bike' : 'metro'
      );
      const response = {
        temperature: weather.data.currently.temperature,
        summary: weather.data.currently.summary,
        precipProbability: weather.data.currently.precipProbability,
        icon: weather.data.currently.icon.toUpperCase().replace(/-/g, '_'), // conversion allows use with skycons see https://www.npmjs.com/package/react-animated-weather
        mode
      };
      return ({ response });
    })
    .catch(error => ({ error: error.response }));
};

export default getWeather;
