import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import WeatherInfo from '@/components/WeatherInfo.vue';
import { weatherMock } from './helpers/weatherMock';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });


describe('WeatherInfo.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(WeatherInfo, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('displays weather information', () => {
    const wrapper = mount(WeatherInfo, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.text()).toContain('Warsaw');
    expect(wrapper.text()).toContain('20 °C');
  });
});
