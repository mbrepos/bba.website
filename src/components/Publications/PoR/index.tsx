import React from 'react';
import { StateContainer, DesktopView, MobileView, ReportFrame, MobileContent, BackButton } from './styles';

interface PoRProps {
  reportUrl?: string;
  onBack?: () => void;
}

const PoR: React.FC<PoRProps> = ({ reportUrl, onBack }) => {
  const defaultReportUrl = '/publications/PoR.pdf';

  return (
    <StateContainer>
      {onBack && <BackButton onClick={onBack}>← Back to Publications</BackButton>}
      <DesktopView>
        <ReportFrame
          src={reportUrl || defaultReportUrl}
          title="Proof of Reserves Report"
          allow="fullscreen"
        />
      </DesktopView>
      <MobileView>
        <MobileContent>
          <h2>Proof of Reserves Report</h2>
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

export { PoR };
export default PoR;