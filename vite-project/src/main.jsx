import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DEMO from './DEMO.JSX'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App />
   <DEMO />
  </React.StrictMode>,
)
