import { config } from '@vue/test-utils';
import { vi } from 'vitest';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

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
