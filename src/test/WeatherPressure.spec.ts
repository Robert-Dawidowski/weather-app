import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import WeatherPressure from '@/components/WeatherPressure.vue';
import { weatherMock } from './helpers/weatherMock';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });

describe('WeatherPressure.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(WeatherPressure, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('displays pressure information', () => {
    const wrapper = mount(WeatherPressure, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.text()).toContain('Pressure');
    expect(wrapper.text()).toContain('1012 hPa');
  });
});
