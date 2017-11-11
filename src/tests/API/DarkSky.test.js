import moment from 'moment';
import { getWeather } from '../../API/DarkSky';

test('should retreive weatherData from DarkSky API', (done) => {
  getWeather(moment().valueOf())
  .then((response) => {
    expect(response).toEqual(expect.any(Object));
    done();
  });
});