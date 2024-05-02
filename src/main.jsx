import React from 'react'
import ReactDOM from 'react-dom/client'
import Building from './Experiences/Building/Building'
import App from './App'
import { ReservaProvider } from './context/reservaContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReservaProvider>
      <App />
    </ReservaProvider>
  </React.StrictMode>,
)
