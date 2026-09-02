import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import GuestMode from './GuestMode.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GuestMode />
  </StrictMode>,
);
