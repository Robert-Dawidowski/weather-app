import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import WeatherDescription from '@/components/WeatherDescription.vue';
import { weatherMock } from './helpers/weatherMock';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });


describe('WeatherDescription.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(WeatherDescription, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('displays weather description', () => {
    const wrapper = mount(WeatherDescription, {
      props: { weather: weatherMock },
      global: {
        plugins: [vuetify],
      },
    });

    const icon = wrapper.find('img');
    expect(icon.exists()).toBe(true);
    expect(wrapper.text()).toContain('clear sky');
  });
});
