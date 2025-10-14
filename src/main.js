import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import faviconUrl from './assets/favicon.ico'

  const link = document.createElement('link')
        link.rel = 'icon'
        link.href = faviconUrl
        document.head.appendChild(link)

createApp(App).mount('#app')
