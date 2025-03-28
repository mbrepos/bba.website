import React from 'react';
import { StateContainer, DesktopView, MobileView, ReportFrame, MobileContent } from './styles';

interface PoRProps {
  reportUrl?: string;
}

const PoR: React.FC<PoRProps> = ({ reportUrl }) => {
  const defaultReportUrl = 'https://www.canva.com/design/DAFjNTV2yLE/8TYPC6nJXJuK5-f67ouPYw/view';

  return (
    <StateContainer>
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
        </MobileContent>
      </MobileView>
    </StateContainer>
  );
};

export { PoR };
export default PoR;