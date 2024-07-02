import './helpers/mockResizeObserver';
import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import Weather from '@/components/Weather.vue';
import WeatherForm from '@/components/WeatherForm.vue';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({components, directives});

describe('Weather.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(Weather, {
      global: {
        plugins: [vuetify],
      },
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('renders Weather form component', async () => {
    const wrapper = mount(Weather, {
      global: {
        plugins: [vuetify],
      },
    });
    await wrapper.vm.$nextTick();
    expect(wrapper.findComponent(WeatherForm).exists()).toBe(true);
  });
});
