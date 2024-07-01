import { WeatherData } from '@/pages/Weather/interfaces/WeatherData';

export const weatherMock: WeatherData = {
  coord: { lon: 21.017532, lat: 52.237049 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01d' }],
  base: 'stations',
  main: { temp: 20, feels_like: 19, temp_min: 18, temp_max: 22, pressure: 1012, humidity: 50 },
  visibility: 10000,
  wind: { speed: 3.6, deg: 200 },
  clouds: { all: 0 },
  dt: 1626353075,
  sys: { type: 2, id: 2038500, country: 'PL', sunrise: 1626313027, sunset: 1626367556 },
  timezone: 7200,
  id: 756135,
  name: 'Warsaw',
  cod: 200,
};
