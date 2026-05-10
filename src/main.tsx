import './i18n/index.ts';

import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div />}>
      <App />
    </Suspense>
  </StrictMode>,
);
