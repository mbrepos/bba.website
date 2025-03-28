import React from 'react';
import '../styles/state.css';

interface StateProps {
  reportUrl?: string;
}

const State: React.FC<StateProps> = ({ reportUrl }) => {
  const defaultReportUrl = 'https://www.canva.com/design/DAFWVGGQKz4/aq-SdXTNAEv7MEcEyeS-dQ/view';

  return (
    <div className="state-container">
      <div className="desktop-view">
        <iframe
          src={reportUrl || defaultReportUrl}
          title="State Report"
          className="report-frame"
          allow="fullscreen"
        />
      </div>
      <div className="mobile-view">
        <div className="mobile-content">
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
        </div>
      </div>
    </div>
  );
};

export { State };
export default State;
