import styled from '@emotion/styled';
import theme from '../../../styles/theme'; // Adjusted path

export const StateContainer = styled.div`
  background-color: ${props => props.theme.colors.backgroundDark};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DesktopView = styled.div`
  display: none;
  @media (min-width: 769px) {
    display: block;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const MobileView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
  min-height: calc(100vh - 60px);
  @media (min-width: 769px) {
    display: none;
  }
`;

export const ReportFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;

export const MobileContent = styled.div`
  color: ${props => props.theme.colors.white};
  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
    transition: color 0.3s ease;
    &:hover {
      color: ${props => props.theme.colors.secondary};
    }
  }
`;

export const BackButton = styled.a`
  display: block;
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 100;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.small};
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  cursor: pointer;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    position: static;
    margin-top: ${props => props.theme.spacing.md};
    display: inline-block;
  }
`;