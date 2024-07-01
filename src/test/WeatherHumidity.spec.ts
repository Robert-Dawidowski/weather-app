import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import WeatherHumidity from '@/components/WeatherHumidity.vue';
import { weatherMock } from './helpers/weatherMock';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });

describe('WeatherHumidity.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(WeatherHumidity, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('displays humidity information', () => {
    const wrapper = mount(WeatherHumidity, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.text()).toContain('Humidity');
    expect(wrapper.text()).toContain('50%');
  });
});
