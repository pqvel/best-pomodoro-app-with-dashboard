import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.tsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux/es/exports'
import { store } from './core/redux/app/store.ts'
import './assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
