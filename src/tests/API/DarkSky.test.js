import moment from 'moment';
import getWeather from '../../API/DarkSky';

test('should retreive weatherData from DarkSky API', (done) => {
  const weatherData = {
    precipProbability: expect.any(Number),
    summary: expect.any(String),
    temperature: expect.any(Number),
    icon: expect.any(String),
    mode: expect.any(String)
  };
  return getWeather({ commuteDate: moment().unix() })
    .then((result) => {
      expect(result.response).toEqual(weatherData);
      done();
    });
});

test('should fail to retreive weatherData from DarkSky API', (done) => {
  return getWeather({ commuteDate: 'abc' })
    .then((result) => {
      expect(result.error).toEqual(expect.any(Object));
      done();
    });
});
