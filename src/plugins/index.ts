/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { IonicVue } from '@ionic/vue'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(IonicVue)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
