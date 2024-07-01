<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <WeatherInfo :weather="weather" />
      </v-col>
      <v-col cols="12" md="6">
        <WeatherDescription :weather="weather" />
      </v-col>
      <v-col cols="12" md="4">
        <WeatherWindSpeed :weather="weather" />
      </v-col>
      <v-col cols="12" md="4">
        <WeatherHumidity :weather="weather" />
      </v-col>
      <v-col cols="12" md="4">
        <WeatherPressure :weather="weather" />
      </v-col>
      <v-col cols="12">
        <v-card>
          <WeatherMap :weather="weather" @fetchByCoords="fetchByCoords" />
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { defineProps, defineEmits} from 'vue';
import { WeatherData } from '@/pages/Weather/interfaces/WeatherData';
import WeatherMap from '@/components/WeatherMap.vue';
import WeatherInfo from '@/components/WeatherInfo.vue';
import WeatherWindSpeed from '@/components/WeatherWindSpeed.vue';
import WeatherDescription from '@/components/WeatherDescription.vue';
import WeatherHumidity from '@/components/WeatherHumidity.vue';
import WeatherPressure from '@/components/WeatherPressure.vue';

defineProps<{
  weather: WeatherData | null;
}>();

const emit = defineEmits(['fetchByCoords']);
const fetchByCoords = (lat: number, lon: number) => emit('fetchByCoords', lat, lon);

</script>
