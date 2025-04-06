import ReactDOM from 'react-dom/client';
import App from './App';

// This file creates the root and root render for the app 
// It is required and should not be modified
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App />
);
