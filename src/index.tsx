import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// React 18에서는 createRoot를 사용합니다.
const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
