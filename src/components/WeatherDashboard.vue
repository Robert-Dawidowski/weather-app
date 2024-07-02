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
        <WeatherDataCard>
          <template #icon>
            <v-icon size="18" class="mr-2">mdi-weather-windy</v-icon>
            Wind speed:
          </template>
          <template #description>
            {{ weather?.wind.speed }} m/s
          </template>
        </WeatherDataCard>
      </v-col>
      <v-col cols="12" md="4">
        <WeatherDataCard>
          <template #icon>
            <v-icon size="18" class="mr-2">mdi-water-percent</v-icon>
            Humidity:
          </template>
          <template #description>
            {{ weather?.main.humidity }}%
          </template>
        </WeatherDataCard>
      </v-col>
      <v-col cols="12" md="4">
        <WeatherDataCard>
          <template #icon>
            <v-icon size="18" class="mr-2">mdi-gauge</v-icon>
            Pressure:
          </template>
          <template #description>
            {{ weather?.main.pressure }} hPa
          </template>
        </WeatherDataCard>
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
import { WeatherData } from '@/interfaces/WeatherData';
import WeatherMap from '@/components/WeatherMap.vue';
import WeatherInfo from '@/components/WeatherInfo.vue';
import WeatherDescription from '@/components/WeatherDescription.vue';
import WeatherDataCard from '@/components/WeatherDataCard.vue';

defineProps<{
  weather: WeatherData | null;
}>();

const emit = defineEmits(['fetchByCoords']);
const fetchByCoords = (lat: number, lon: number) => emit('fetchByCoords', lat, lon);

</script>
