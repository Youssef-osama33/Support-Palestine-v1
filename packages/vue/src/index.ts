/**
 * Palestine Footer - Vue 3 Package Entry Point
 */

import { App } from 'vue';
import PalestineFooter from './PalestineFooter.vue';

// Install function for Vue.use()
export function install(app: App) {
  app.component('PalestineFooter', PalestineFooter);
}

// Export component
export { PalestineFooter };

// Default export
export default PalestineFooter;

// Auto-install when loaded via CDN
if (typeof window !== 'undefined' && (window as any).Vue) {
  (window as any).Vue.use({ install });
}
