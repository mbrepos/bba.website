import styled from '@emotion/styled';

// Main page container
export const ConstructionPage = styled.div`
  min-height: 100vh;
  background-color: #1c1c1c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
`;

// Container for the content
export const ConstructionContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

// Content wrapper
export const ConstructionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
  gap: 2rem;
`;

// Image container
export const ConstructionImage = styled.div`
  max-width: 600px;
  width: 100%;
  margin-bottom: 1rem;
`;

// GIF image
export const ConstructionGif = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(245, 53, 84, 0.2);
`;

// Text section
export const ConstructionText = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #f78294, #f53554);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

// Message paragraphs
export const Message = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #f8f9fa;
`;

export const SubMessage = styled.p`
  font-size: 1.25rem;
  color: #adb5bd;
  margin-bottom: 2rem;
`;

// Action area
export const ActionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

// Return button
export const ReturnButton = styled.button`
  background: linear-gradient(45deg, #f78294, #f53554);
  border: none;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 30px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: white;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(245, 53, 84, 0.4);
    background: linear-gradient(45deg, #f53554, #f78294);
  }
`;

// ETA message
export const EtaMessage = styled.p`
  font-size: 0.875rem;
  color: #6c757d;
  margin: 0;
`;

// Details section
export const ConstructionDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 800px;
`;

// Detail item
export const DetailItem = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.25rem;
    color: #f78294;
    margin-bottom: 1rem;
  }

  p {
    color: #adb5bd;
    line-height: 1.6;
    margin: 0;
  }

  a {
    color: #f53554;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #f78294;
    }
  }
`;

// Responsive adjustments
export const ResponsiveAdjustments = styled.div`
  @media (max-width: 768px) {
    ${ConstructionText} h1 {
      font-size: 2.5rem;
    }

    ${Message} {
      font-size: 1.25rem;
    }

    ${SubMessage} {
      font-size: 1rem;
    }

    ${ReturnButton} {
      padding: 0.875rem 1.75rem;
      font-size: 1rem;
    }

    ${ConstructionDetails} {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    ${ConstructionText} h1 {
      font-size: 2rem;
    }

    ${Message} {
      font-size: 1.125rem;
    }

    ${ConstructionImage} {
      max-width: 100%;
    }

    ${DetailItem} {
      padding: 1.5rem;
    }
  }
`;