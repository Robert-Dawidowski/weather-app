import { mount } from '@vue/test-utils';
import { describe, it, expect, vi } from 'vitest';
import WeatherDisplay from '@/components/WeatherDisplay.vue';
import { weatherMock } from './helpers/weatherMock';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });

describe('WeatherDisplay.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(WeatherDisplay, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('renders weather details', () => {
    const wrapper = mount(WeatherDisplay, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.text()).toContain('Warsaw');
    expect(wrapper.text()).toContain('20 °C');
    expect(wrapper.text()).toContain('clear sky');
  });
});
