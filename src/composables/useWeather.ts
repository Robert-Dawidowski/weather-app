import {ref} from 'vue';
import axios from 'axios';
import {WeatherData} from '@/interfaces/WeatherData';

const API_KEY = import.meta.env.VITE_API_KEY;

export function useWeather() {
  const weather = ref<WeatherData | null>(null);
  const loading = ref(false);
  const isApiError = ref(false);
  const errorText = ref('');

  const fetchWeather = async (city: string) => {
    weather.value = null;
    loading.value = true;
    errorText.value = '';
    try {
      const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          q: city,
          units: 'metric',
          appid: API_KEY
        }
      });
      weather.value = response.data;
    } catch (error) {
      errorText.value = error.response?.data?.message || 'An error occurred';
      isApiError.value = true;
    } finally {
      loading.value = false;
    }
  };

  const fetchWeatherByCoordinates = async (lat: number, lon: number) => {
    weather.value = null;
    loading.value = true;
    errorText.value = '';
    try {
      const response = await axios.get<WeatherData>(
          `https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat,
          lon,
          units: 'metric',
          appid: API_KEY
        }
      });
      weather.value = response.data;
    } catch (error) {
      errorText.value = error.response?.data?.message || 'An error occurred';
      isApiError.value = true;
    } finally {
      loading.value = false;
    }
  };

  return {
    weather,
    loading,
    isApiError,
    errorText,
    fetchWeather,
    fetchWeatherByCoordinates
  };
}
