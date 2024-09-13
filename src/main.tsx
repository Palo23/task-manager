import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RoutesProvider } from './providers/index.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesProvider />
    <App />
  </StrictMode>
);
