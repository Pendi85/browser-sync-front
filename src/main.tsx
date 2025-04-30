import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BookmarksFilesList from './BookmarksFilesList.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BookmarksFilesList />
  </StrictMode>,
)
