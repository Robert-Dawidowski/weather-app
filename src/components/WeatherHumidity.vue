<template>
  <v-card>
    <v-card-text>
      <v-row align="center">
        <v-col cols="12">
          <v-icon size="18" v-bind="props" class="mr-2">mdi-water-percent</v-icon>
          Humidity:
        </v-col>
        <v-col>
          <v-list-item-title  class="text-h5">
            {{ weather.main.humidity }}%
          </v-list-item-title>
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
