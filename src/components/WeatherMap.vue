<template>
  <div>
    <div id="map" style="height: 20rem;" ref="mapContainer"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, watch, onUnmounted, defineEmits } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { WeatherData } from '@/pages/Weather/interfaces/WeatherData';

const props = defineProps<{
  weather: WeatherData | null;
}>();

const mapContainer = ref<HTMLElement | null>(null);
const map = ref<L.Map | null>(null);
const emit = defineEmits(['fetchByCoords']);

const addMarker = (weather: WeatherData) => {
  if (map.value) {
    const marker = L.marker([weather.coord.lat, weather.coord.lon]).addTo(map.value);
    marker.bindPopup(weather.name).openPopup();
  }
};

const removeMarkers = () => {
  map.value?.eachLayer((layer) => {
    if (layer instanceof L.Marker) {
      map.value?.removeLayer(layer);
    }
  });
};

onMounted(() => {
  if (props.weather?.coord && mapContainer.value) {
    map.value = L.map(mapContainer.value).setView([props.weather.coord.lat, props.weather.coord.lon], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map.value);

    addMarker(props.weather);

    map.value.on('click', (e) => {
      const latlng = e.latlng;
      emit('fetchByCoords', latlng.lat, latlng.lng);
    });
  }
});

watch(() => props.weather, (newWeather) => {
  if (newWeather?.coord && map.value) {
    map.value.setView([newWeather.coord.lat, newWeather.coord.lon], 10);
    removeMarkers();
    addMarker(newWeather);
  }
});

onUnmounted(() => {
  if (map.value) {
    map.value.remove();
    map.value = null;
  }
});
</script>
