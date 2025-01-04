import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { AlertProvider } from './util/AlertContext.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AlertProvider>
            <App />
        </AlertProvider>
    </StrictMode>,
);
