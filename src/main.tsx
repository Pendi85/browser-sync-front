import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginExt from './extension/LoginExt.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginExt />
  </StrictMode>,
)
