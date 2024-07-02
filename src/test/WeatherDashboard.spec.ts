import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import WeatherDashboard from '@/components/WeatherDashboard.vue';
import { weatherMock } from './helpers/weatherMock';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });

describe('WeatherDashboard.vue', () => {
  it('renders correctly', async () => {
    const wrapper = mount(WeatherDashboard, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.exists()).toBe(true);
  });

  it('renders weather details', async () => {
    const wrapper = mount(WeatherDashboard, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });

    await wrapper.vm.$nextTick();

    expect(wrapper.text()).toContain('Warsaw');
    expect(wrapper.text()).toContain('20 °C');
    expect(wrapper.text()).toContain('clear sky');
  });

  it('renders WeatherDataCard with correct slot content', async () => {
    const wrapper = mount(WeatherDashboard, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });

    await wrapper.vm.$nextTick();

    const weatherDataCards = wrapper.findAllComponents({ name: 'WeatherDataCard' });

    weatherDataCards.forEach((card, index) => {
      expect(card.exists()).toBe(true);
      switch (index) {
        case 0:
          expect(card.text()).toContain('Wind speed:');
          expect(card.text()).toContain(`${weatherMock.wind.speed} m/s`);
          break;
        case 1:
          expect(card.text()).toContain('Humidity:');
          expect(card.text()).toContain(`${weatherMock.main.humidity}%`);
          break;
        case 2:
          expect(card.text()).toContain('Pressure:');
          expect(card.text()).toContain(`${weatherMock.main.pressure} hPa`);
          break;
        default:
          break;
      }
    });
  });
});
