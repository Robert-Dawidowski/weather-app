<template>
  <v-card class="mx-auto pa-3 h-100">
    <v-card-text class="py-0 h-100 d-flex">
      <v-row align="center" no-gutters>
        <v-col cols="12" class="text-h4 text-center text-md-left">
          {{ weather.name }}
        </v-col>
        <v-col class="text-h2 text-lg-h1 mt-5 text-center text-md-left" cols="12">
          {{ Math.round(weather.main.temp) }} °C
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
