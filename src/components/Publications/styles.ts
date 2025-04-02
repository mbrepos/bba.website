import styled from '@emotion/styled';
import theme from '../../styles/theme';

// Main container for publications
export const PublicationsPage = styled.div`
  background-color: ${props => props.theme.colors.backgroundDark};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

interface PublicationsContentProps {
  pdfMode?: boolean;
}

export const PublicationsContent = styled.div<PublicationsContentProps>`
  flex: 1;
  padding: ${props => props.pdfMode ? '0' : `${props.theme.spacing.xxl} 0`};
`;

// Header section
export const PublicationsHeader = styled.div`
  text-align: center;
  margin: 2rem 0 ${props => props.theme.spacing.xl};

  h1 {
    font-size: ${props => props.theme.fontSizes.xxxlarge};
    color: ${props => props.theme.colors.white};
    margin-bottom: ${props => props.theme.spacing.md};
  }

  p {
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.white};
  }
`;

// Grid layout for publications
export const PublicationsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.xxl};
  padding: 0 ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.lg};
`;

// Year section container
export const YearSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

export const YearTitle = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.xxlarge};
  margin-bottom: ${props => props.theme.spacing.lg};
  border-bottom: 1px solid ${props => props.theme.colors.white};
  padding-bottom: ${props => props.theme.spacing.sm};
`;

export const PublicationsRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};

  ${props => props.theme.mq.md} {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`;

// Publication card
export const PublicationCard = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.boxShadows.small};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.boxShadows.medium};
  }
`;

export const PublicationTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xlarge};
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const PublicationDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.md};
  flex-grow: 1;
`;

export const PublicationButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border: none;
  border-radius: ${props => props.theme.borderRadius.small};
  font-size: ${props => props.theme.fontSizes.medium};
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: ${props => props.theme.colors.primary}; 
    opacity: 0.9;
  }
`;

// Exit Bar container
interface ExitBarContainerProps {
  navbarHeight: number;
}

export const ExitBarContainer = styled.div<ExitBarContainerProps>`
  background-color: ${props => props.theme.colors.backgroundDark};
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: ${props => props.navbarHeight}px;
  left: 0;
  right: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const ExitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  background-color: transparent;
  border: none;
  font-size: ${props => props.theme.fontSizes.medium};
  cursor: pointer;
  transition: opacity 0.2s;
  padding: 4px 12px;
  
  &:hover {
    opacity: 0.8;
  }
  
  svg {
    margin-right: 6px;
  }
`;

// PDF Viewer container
interface PDFViewerContainerProps {
  navbarHeight: number;
  exitBarHeight: number;
}

export const PDFViewerContainer = styled.div<PDFViewerContainerProps>`
  position: fixed;
  top: ${props => props.navbarHeight + props.exitBarHeight}px;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;

  /* Hide any unwanted text elements that might appear in PDF viewers */
  .textLayer {
    opacity: 0;
    visibility: hidden;
  }

  /* Ensure PDF viewer toolbar doesn't conflict with our back button */
  .viewer-toolbar {
    margin-top: 10px !important;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 500;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
