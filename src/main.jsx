import React from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from './views/Root.jsx'
import { AppProviders } from './providers/AppProviders.jsx'


ReactDOM.createRoot(document.getElementById('root')
).render(
  <React.StrictMode>
    <AppProviders>
      <Root />
    </AppProviders>
  </React.StrictMode>,
)