import { mount } from '@vue/test-utils';
import WeatherMap from '@/components/WeatherMap.vue';

describe('WeatherMap.vue', () => {
  const mockWeather1 = {
    coord: {
      lat: 52.237049,
      lon: 21.017532,
    },
    name: 'Warsaw',
  };

  const mockWeather2 = {
    coord: {
      lat: 40.712776,
      lon: -74.005974,
    },
    name: 'New York',
  };

  it('renders map container and initializes Leaflet map', async () => {
    const wrapper = mount(WeatherMap, {
      props: {
        weather: mockWeather1,
      },
    });

    await wrapper.vm.$nextTick();

    const mapContainer = wrapper.find('#map');

    expect(mapContainer.exists()).toBe(true);
    expect(wrapper.vm.map).toBeTruthy();
  });


  it('emits fetchByCoords event on map click', async () => {
    const wrapper = mount(WeatherMap, {
      props: {
        weather: mockWeather1,
      },
    });

    await wrapper.vm.$nextTick();

    const latlng = { lat: 50.0, lng: 10.0 };
    wrapper.vm.map.fireEvent('click', { latlng });

    expect(wrapper.emitted('fetchByCoords')).toBeTruthy();
    expect(wrapper.emitted('fetchByCoords')[0]).toEqual([latlng.lat, latlng.lng]);
  });
});
