import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import RegistroNuevo from './paginas/registroNuevo'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RegistroNuevo />
  </StrictMode>,
)
