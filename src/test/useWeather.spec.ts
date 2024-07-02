import { describe, it, expect, beforeEach } from 'vitest';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useWeather } from '@/composables/useWeather';
import { WeatherData } from '@/interfaces/WeatherData';
import { weatherMock } from './helpers/weatherMock';

describe('useWeather', () => {
  let mock: MockAdapter;

  beforeEach(() => {
        mock = new MockAdapter(axios);
    });

    it('fetches weather data by city', async () => {
        const { weather, loading, isApiError, errorText, fetchWeather } = useWeather();
        const mockData: WeatherData = weatherMock;

        mock.onGet('https://api.openweathermap.org/data/2.5/weather').reply(200, mockData);

        await fetchWeather('London');

        expect(loading.value).toBe(false);
        expect(isApiError.value).toBe(false);
        expect(errorText.value).toBe('');
        expect(weather.value).toEqual(mockData);
    });

    it('handles API errors', async () => {
        const { isApiError, errorText, fetchWeather } = useWeather();

        mock.onGet('https://api.openweathermap.org/data/2.5/weather').reply(404, {
            message: 'City not found'
        });

        await fetchWeather('InvalidCity');

        expect(isApiError.value).toBe(true);
        expect(errorText.value).toBe('City not found');
    });

    it('fetches weather data by coordinates', async () => {
        const { weather, loading, isApiError, errorText, fetchWeatherByCoordinates } = useWeather();
        const mockData: WeatherData = weatherMock;

        mock.onGet('https://api.openweathermap.org/data/2.5/weather').reply(200, mockData);

        await fetchWeatherByCoordinates(51.5074, -0.1278);

        expect(loading.value).toBe(false);
        expect(isApiError.value).toBe(false);
        expect(errorText.value).toBe('');
        expect(weather.value).toEqual(mockData);
    });

    it('handles API errors for coordinates', async () => {
        const { isApiError, errorText, fetchWeatherByCoordinates } = useWeather();

        mock.onGet('https://api.openweathermap.org/data/2.5/weather').reply(404, {
            message: 'Coordinates not found'
        });

        await fetchWeatherByCoordinates(999, 999);

        expect(isApiError.value).toBe(true);
        expect(errorText.value).toBe('Coordinates not found');
    });
});
