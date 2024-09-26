import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { initialState, reducer } from './Utility/reducer.js'
import './index.css'
import { DataProvider } from './Components/DataProvider/DataProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
    <App />
    </DataProvider>

  </StrictMode>,
  
)


