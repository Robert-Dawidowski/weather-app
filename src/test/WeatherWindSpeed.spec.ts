import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import WeatherWindSpeed from '@/components/WeatherWindSpeed.vue';
import { weatherMock } from './helpers/weatherMock';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });

describe('WeatherWindSpeed.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(WeatherWindSpeed, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('displays wind speed information', () => {
    const wrapper = mount(WeatherWindSpeed, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.text()).toContain('Wind speed');
    expect(wrapper.text()).toContain('3.6 m/s');
  });
});
