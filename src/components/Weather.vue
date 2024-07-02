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
            <div v-if="errorText" class="d-flex flex-grow-1 justify-center align-center flex-column pt-5">
              <v-icon size="300" color="grey" class="opacity-40 pa-3">
                mdi-map-marker-off-outline
              </v-icon>
              Sorry, we couldn't find your city, please enter another city to check the weather there
            </div>
            <WeatherDashboard v-else-if="weather" :weather="weather" @fetchByCoords="fetchWeatherByCoordinates"/>
            <v-snackbar v-model="isApiError" color="red">
              {{ errorText }}
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
import { onMounted } from 'vue';
import WeatherDashboard from '@/components/WeatherDashboard.vue';
import WeatherForm from '@/components/WeatherForm.vue';
import { useWeather } from '@/composables/useWeather';

const {
  weather,
  errorText,
  isApiError,
  loading,
  fetchWeather,
  fetchWeatherByCoordinates
} = useWeather();

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
</script>
