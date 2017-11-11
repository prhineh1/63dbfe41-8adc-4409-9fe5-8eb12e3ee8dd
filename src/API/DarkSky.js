import axios from 'axios';

export const getWeather = ({ commuteDate }) => {
  const url = `https://1miudhz7a9.execute-api.us-east-1.amazonaws.com/dev/forecast/38.9072,-77.0369,${commuteDate}`;
  return axios.get(url).then(response => response);
};
