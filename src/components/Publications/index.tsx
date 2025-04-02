import React, { useState, useEffect, useRef } from 'react';
import Footer from '../Footer';
import {
  PublicationsPage,
  PublicationsContent,
  PublicationsHeader,
  PublicationsGrid,
  PublicationCard,
  PublicationTitle,
  PublicationDescription,
  PublicationButton,
  PDFViewerContainer,
  ExitBarContainer,
  ExitButton,
  YearSection,
  YearTitle,
  PublicationsRow
} from './styles';

const Publications: React.FC = () => {
  const [showPor, setShowPor] = useState(false);
  const [showState, setShowState] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(60); // Default navbar height
  const [exitBarHeight, setExitBarHeight] = useState(41); // Default exit bar height (based on padding + border)
  const exitBarRef = useRef<HTMLDivElement>(null);

  // Get the actual navbar height on component mount
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      const height = navbar.getBoundingClientRect().height;
      setNavbarHeight(height);
    }
    
    // Update on resize to handle responsive changes
    const handleResize = () => {
      const navbar = document.querySelector('nav');
      if (navbar) {
        const height = navbar.getBoundingClientRect().height;
        setNavbarHeight(height);
      }
      
      // Update exit bar height if available
      if (exitBarRef.current) {
        const height = exitBarRef.current.getBoundingClientRect().height;
        setExitBarHeight(height);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Update exit bar height when it becomes visible
  useEffect(() => {
    if ((showPor || showState) && exitBarRef.current) {
      const height = exitBarRef.current.getBoundingClientRect().height;
      setExitBarHeight(height);
    }
  }, [showPor, showState]);

  const handleViewPor = () => {
    setShowPor(true);
    setShowState(false);
  };

  const handleViewState = () => {
    setShowState(true);
    setShowPor(false);
  };

  const handleBackToPublications = () => {
    setShowPor(false);
    setShowState(false);
  };

  // Determine if we're in PDF viewing mode
  const isPdfMode = showPor || showState;

  return (
    <PublicationsPage>
      <PublicationsContent pdfMode={isPdfMode}>
        {!isPdfMode ? (
          <>
            <PublicationsHeader>
              <h1>Publications</h1>
              <p>Latest research and analysis from Bentley Blockchain Association</p>
            </PublicationsHeader>

            <PublicationsGrid>
              <YearSection>
                <YearTitle>Spring 2023</YearTitle>
                <PublicationsRow>
                  <PublicationCard>
                    <PublicationTitle>Proof of Reserves Report</PublicationTitle>
                    <PublicationDescription>
                      Our comprehensive analysis of cryptocurrency exchange reserves and transparency practices.
                      This report examines how major exchanges prove their solvency and protect user funds.
                    </PublicationDescription>
                    <PublicationButton onClick={handleViewPor}>
                      View Report
                    </PublicationButton>
                  </PublicationCard>
                </PublicationsRow>
              </YearSection>

              <YearSection>
                <YearTitle>Fall 2022</YearTitle>
                <PublicationsRow>
                  <PublicationCard>
                    <PublicationTitle>State of Blockchain Report</PublicationTitle>
                    <PublicationDescription>
                      An in-depth overview of the current blockchain landscape, emerging trends, 
                      technological advancements, and market insights.
                    </PublicationDescription>
                    <PublicationButton onClick={handleViewState}>
                      View Report
                    </PublicationButton>
                  </PublicationCard>
                </PublicationsRow>
              </YearSection>
            </PublicationsGrid>
          </>
        ) : (
          <>
            <ExitBarContainer ref={exitBarRef} navbarHeight={navbarHeight}>
              <ExitButton onClick={handleBackToPublications}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
                Return to Publications
              </ExitButton>
            </ExitBarContainer>
            <PDFViewerContainer navbarHeight={navbarHeight} exitBarHeight={exitBarHeight}>
              {showPor && (
                <iframe 
                  src="/publications/PoR.pdf" 
                  title="Proof of Reserves Report"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="fullscreen"
                />
              )}
              
              {showState && (
                <iframe 
                  src="/publications/State.pdf" 
                  title="State of Blockchain Report"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  allow="fullscreen"
                />
              )}
            </PDFViewerContainer>
          </>
        )}
      </PublicationsContent>
      
      {/* Only render the Footer when not in PDF viewing mode */}
      {!isPdfMode && <Footer />}
    </PublicationsPage>
  );
};

export default Publications;
