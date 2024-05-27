import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/app/App.tsx'
import { Provider as StoreProvider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
)
