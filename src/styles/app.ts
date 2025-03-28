import styled from '@emotion/styled';
import { css } from '@emotion/react';

// Styled component for the .App class
export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

// Styled component for the .main-content class
export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

// Global styles including CSS variables, resets, and other rules
export const globalStyles = css`
  :root {
    --primary-color: #144181;
    --secondary-color: #f53554;
    --text-color: #333;
    --light-text: #666;
    --background-light: #f8f9fa;
    --background-dark: #1c1c1c;
    --transition-speed: 0.3s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--text-color);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.2;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
  }

  a:hover {
    color: var(--secondary-color);
  }

  .btn {
    transition: all var(--transition-speed) ease;
  }

  .btn:hover {
    transform: translateY(-2px);
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 0 0.5rem;
    }
  }
`;