
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalContext } from './context/Context.tsx'

createRoot(document.getElementById('root')!).render(
  <GlobalContext>
    <App />
  </GlobalContext>,
)
