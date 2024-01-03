// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { fr } from 'vuetify/locale'
import { mdi, aliases } from 'vuetify/iconsets/mdi'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  locale: {
    locale: 'fr',
    messages: { fr }
  },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
        }
      }
    }
  },
  defaults: {
    VTextField: {
      color: 'primary',
    },
    VTextarea: {
      color: 'primary',
    },
    VSelect: {
      color: 'primary',
    },
    VAutocomplete: {
      color: 'primary',
    },
    VBtn: {
      color: 'primary',
      variant: 'flat',
      rounded: 'lg'
    },
    VPagination: {
      activeColor: 'primary',
      totalVisible: 4
    }
  }
})
