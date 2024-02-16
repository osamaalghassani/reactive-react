// css imports
import '@unocss/reset/tailwind.css';
import 'virtual:uno.css';
import 'unfonts.css';
import './index.css';
import { I18nProvider } from '@lingui/react';
import { ClickToComponent } from 'click-to-react-component';
// js imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

createRoot(document.querySelector('#root') as Element).render(
  <StrictMode>
    <I18nProvider i18n={i18n}>
      <RouterProvider router={router} />
      <ClickToComponent />
    </I18nProvider>
  </StrictMode>,
);
