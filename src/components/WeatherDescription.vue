<template>
  <v-card>
    <v-card-text>
      <v-row>
        <v-col cols="12" class="d-flex justify-center align-center">
          <v-img :src="`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`" width="10rem" height="10rem" alt="weather-icon" />
        </v-col>
        <v-col class="text-h6 text-center" cols="12">
          {{ weather.weather[0].description }}
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { WeatherData } from '@/pages/Weather/interfaces/WeatherData';

defineProps<{
  weather: WeatherData | null;
}>();

</script>
