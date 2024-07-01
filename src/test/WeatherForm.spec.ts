import { mount } from '@vue/test-utils';
import { expect } from 'vitest';
import WeatherForm from '@/components/WeatherForm.vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({ components, directives });

describe('WeatherForm.vue', () => {
  it('emits submit event with city name', async () => {
    const wrapper = mount(WeatherForm, {
      global: {
        plugins: [vuetify],
      },
    });

    const input = wrapper.find('input');
    await input.setValue('Warsaw');

    await wrapper.find('form').trigger('submit.prevent');
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted('submit')).toBeTruthy();
    expect(wrapper.emitted('submit')![0]).toEqual(['Warsaw']);
  });

  it('displays error message for empty city name', async () => {
    const wrapper = mount(WeatherForm, {
      global: {
        plugins: [vuetify],
      },
    });

    // Submit with empty input
    await wrapper.find('form').trigger('submit.prevent');
    await wrapper.vm.$nextTick();

    const errorMessage = wrapper.find('.v-messages__message');
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toContain('City name is required');
  });

  it('displays error message for invalid city name format', async () => {
    const wrapper = mount(WeatherForm, {
      global: {
        plugins: [vuetify],
      },
    });

    const input = wrapper.find('input');
    await input.setValue('12345'); // Invalid city name format

    await wrapper.find('form').trigger('submit.prevent');
    await wrapper.vm.$nextTick();

    const errorMessage = wrapper.find('.v-messages__message');
    expect(errorMessage.exists()).toBe(true);
    expect(errorMessage.text()).toContain('City name must contain only letters');
  });
});
