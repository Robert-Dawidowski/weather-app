import { config } from '@vue/test-utils';
import { vi } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import 'vitest';

// Mock ResizeObserver to avoid errors in the test environment
class ResizeObserver {
  callback: ResizeObserverCallback;

  constructor(callback: ResizeObserverCallback) {
    this.callback = callback;
  }

  observe() {
    // Do nothing
  }

  unobserve() {
    // Do nothing
  }

  disconnect() {
    // Do nothing
  }
}

global.ResizeObserver = ResizeObserver;

const vuetify = createVuetify({
  components,
  directives,
});

config.global.plugins = [vuetify];

globalThis.ResizeObserver = require('resize-observer-polyfill');
globalThis.fetch = vi.fn();
globalThis.console = {
  ...console,
  log: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
};
