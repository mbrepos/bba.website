import React from 'react';
import { useNavigate } from 'react-router-dom';
import constructionGif from '../../images/construction.gif';
import {
  ConstructionPage,
  ConstructionContainer,
  ConstructionContent,
  ConstructionImage,
  ConstructionGif,
  ConstructionText,
  Message,
  SubMessage,
  ActionArea,
  ReturnButton,
  EtaMessage,
  ConstructionDetails,
  DetailItem,
  ResponsiveAdjustments,
} from './styles';

const Construction: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate('/');
  };

  return (
    <ConstructionPage>
      <ConstructionContainer>
        <ResponsiveAdjustments>
          <ConstructionContent>
            <ConstructionImage>
              <ConstructionGif src={constructionGif} alt="Under Construction" />
            </ConstructionImage>

            <ConstructionText>
              <h1>Under Construction</h1>
              <Message>Sorry, you flew too high and we lost you.</Message>
              <SubMessage>This page is still being built out.</SubMessage>

              <ActionArea>
                <ReturnButton onClick={handleReturn}>
                  Let's head back to the nest
                </ReturnButton>
                <EtaMessage>Expected completion: Coming Soon</EtaMessage>
              </ActionArea>
            </ConstructionText>

            <ConstructionDetails>
              <DetailItem>
                <h3>What's Coming?</h3>
                <p>We're working hard to bring you an amazing new feature. Stay tuned!</p>
              </DetailItem>
              <DetailItem>
                <h3>Want Updates?</h3>
                <p>
                  Follow us on{' '}
                  <a href="https://twitter.com/BentleyBBA" target="_blank" rel="noopener noreferrer">
                    Twitter
                  </a>{' '}
                  for the latest news.
                </p>
              </DetailItem>
            </ConstructionDetails>
          </ConstructionContent>
        </ResponsiveAdjustments>
      </ConstructionContainer>
    </ConstructionPage>
  );
};

export default Construction;