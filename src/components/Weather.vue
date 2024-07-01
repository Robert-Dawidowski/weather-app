<template>
  <v-app>
    <v-main>
      <v-container class="h-100">
        <v-row class="h-100">
          <v-col cols="12" md="8" offset-md="2" class="h-100 d-flex flex-column">
            <WeatherForm @submit="fetchWeather"/>
            <v-row v-if="loading">
              <v-col cols="12" class="text-center">
                <v-progress-circular indeterminate color="primary"/>
              </v-col>
            </v-row>
            <div v-if="isApiError" class="d-flex flex-grow-1 justify-center align-center flex-column pt-5">
              <v-icon size="300" color="grey" class="opacity-40 pa-3">
                mdi-map-marker-off-outline
              </v-icon>
              Sorry, we couldn't find your city, please enter another city to check the weather there
            </div>
            <WeatherDisplay v-else-if="weather" :weather="weather" @fetchByCoords="fetchWeatherByCoordinates"/>
            <v-snackbar v-model="isApiError" color="red" timeout="2000">
              {{ text }}
              <template v-slot:actions>
                <v-btn color="white" variant="text" @click="isApiError = false">
                  Close
                </v-btn>
              </template>
            </v-snackbar>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { WeatherData } from '@/interfaces/WeatherData';

const weather = ref<WeatherData | null>(null);
const text = ref<string>('');
const isApiError = ref<boolean>(false);
const loading = ref<boolean>(false);

const API_KEY = import.meta.env.VITE_API_KEY;

onMounted(() => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeatherByCoordinates(position.coords.latitude, position.coords.longitude);
        },
        () => {
          fetchWeatherByCoordinates(52.237049, 21.017532);
        }
    );
  } else {
    fetchWeatherByCoordinates(52.237049, 21.017532);
  }
});

const fetchWeather = async (city: string) => {
  weather.value = null;
  loading.value = true;
  try {
    const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        q: city,
        units: 'metric',
        appid: API_KEY
      }
    });
    weather.value = response.data;
  } catch (error) {
    text.value = error.response.data.message;
    isApiError.value = true;
  } finally {
    loading.value = false;
  }
};
const fetchWeatherByCoordinates = async (lat: number, lon: number) => {
  loading.value = true;
  try {
    const response = await axios.get<WeatherData>(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat,
        lon,
        units: 'metric',
        appid: API_KEY
      }
    });
    weather.value = response.data;
  } catch (error) {
    console.error(error);
    text.value = error.response?.data?.message || 'An error occurred';
    isApiError.value = true;
  } finally {
    loading.value = false;
  }
};
</script>

