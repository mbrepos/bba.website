import React from 'react';
import { StateContainer, DesktopView, MobileView, ReportFrame, MobileContent } from './styles';

interface StateProps {
  reportUrl?: string;
}

const State: React.FC<StateProps> = ({ reportUrl }) => {
  const defaultReportUrl = 'https://www.canva.com/design/DAFWVGGQKz4/aq-SdXTNAEv7MEcEyeS-dQ/view';

  return (
    <StateContainer>
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
        </MobileContent>
      </MobileView>
    </StateContainer>
  );
};

export { State };
export default State;