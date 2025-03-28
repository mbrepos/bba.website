import React from 'react';
import '../styles/state.css';

interface PoRProps {
  reportUrl?: string;
}

const PoR: React.FC<PoRProps> = ({ reportUrl }) => {
  const defaultReportUrl = 'https://www.canva.com/design/DAFjNTV2yLE/8TYPC6nJXJuK5-f67ouPYw/view';

  return (
    <div className="state-container">
      <div className="desktop-view">
        <iframe
          src={reportUrl || defaultReportUrl}
          title="Proof of Reserves Report"
          className="report-frame"
          allow="fullscreen"
        />
      </div>
      <div className="mobile-view">
        <div className="mobile-content">
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
        </div>
      </div>
    </div>
  );
};

export { PoR };
export default PoR;
