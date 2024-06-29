// src/TeacherPanel/Integrations/Integrations.js
import React, { useState } from 'react';
import { AddCircle } from '@mui/icons-material';
import './Integrations.css';

function Integrations({ onAddData }) {
  const [showPopup, setShowPopup] = useState(false);
  const [integrationType, setIntegrationType] = useState('');
  const [integrationDetails, setIntegrationDetails] = useState('');

  const handleSaveIntegration = () => {
    onAddData('integration', { type: integrationType, details: integrationDetails });
    setIntegrationType('');
    setIntegrationDetails('');
    setShowPopup(false);
  };

  return (
    <>
      <div className="integrations">
        <h2>Integrations</h2>
        <button className="action-button" onClick={() => setShowPopup(true)}>
          <AddCircle />
          Add Integration
        </button>

        {showPopup && (
          <div className="popup">
            <div className="popup-inner">
              <h3>Add Integration</h3>
              <input
                type="text"
                value={integrationType}
                onChange={(e) => setIntegrationType(e.target.value)}
                placeholder="Enter integration type (e.g., Google Classroom, Zoom, Payment Gateway)"
              />
              <input
                type="text"
                value={integrationDetails}
                onChange={(e) => setIntegrationDetails(e.target.value)}
                placeholder="Enter integration details"
              />
              <button onClick={handleSaveIntegration}>Save</button>
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Integrations;
