import React from 'react';
import { StateContainer, DesktopView, MobileView, ReportFrame, MobileContent, BackButton } from './styles';

interface StateProps {
  reportUrl?: string;
  onBack?: () => void;
}

const State: React.FC<StateProps> = ({ reportUrl, onBack }) => {
  const defaultReportUrl = '/publications/State.pdf';

  return (
    <StateContainer>
      {onBack && <BackButton onClick={onBack}>← Back to Publications</BackButton>}
      <DesktopView>
        <ReportFrame
          src={reportUrl || defaultReportUrl}
          title="State Report"
          allow="fullscreen"
        />
      </DesktopView>
      <MobileView>
        <MobileContent>
          <h2>State Report</h2>
          <p>
            Please access the report{' '}
            <a
              href={reportUrl || defaultReportUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>
          {onBack && <BackButton onClick={onBack} as="button">← Back to Publications</BackButton>}
        </MobileContent>
      </MobileView>
    </StateContainer>
  );
};

export { State };
export default State;