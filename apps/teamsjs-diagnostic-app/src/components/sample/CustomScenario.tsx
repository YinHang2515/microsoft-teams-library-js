import React, { useState } from 'react';
import './CustomScenario.css';
import { useDrop } from 'react-dnd';

import apiComponents, { ApiComponent } from './ApiComponents';
import AppInstallDialogAPIs from '../../apis/AppInstallDialogApi';
import BarCodeAPIs from '../../apis/BarCodeApi';

const CustomScenario: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [customScenario, setCustomScenario] = useState<Array<{ api: ApiComponent, func: string, input?: string }>>([]);

  const handleRunScenario = async () => {
    console.log('Running custom scenario...');
    for (const { api, func, input } of customScenario) {
      console.log(`Executing ${func} for ${api.title} with input: ${input}`);
      // Execute the API function based on the selected function and input
    }
  };

  const addToScenario = (api: ApiComponent, func: string, input?: string) => {
    setCustomScenario([...customScenario, { api, func, input }]);
  };

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'API',
    drop: (item: { api: ApiComponent, func: string, input?: string }) => addToScenario(item.api, item.func, item.input),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const generateVerticalBoxes = () => {
    const filteredApis = apiComponents.filter(api =>
      api.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filteredApis.map((api: ApiComponent, index: number) => (
      <div key={index} className="vertical-box">
        {api.title === 'App Install Dialog API' ? (
          <AppInstallDialogAPIs apiComponent={api} />
        ) : api.title === 'Bar Code API' ? (
          <BarCodeAPIs apiComponent={api} />
        ) : null}
      </div>
    ));
  };
  
  return (
    <div className="scenario-container">
        <div className="scenario2-container" ref={drop} style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}>
          <div className="scenario2-header">
            <h2>Custom Scenario</h2>
            <p>Drag and drop API components here to build your custom scenario.</p>
          </div>
          <div className="custom-scenario-box">
            <button className="scenario1-button" onClick={handleRunScenario}>Run Scenario</button>
            <div className="api-section">
              <div className="api-header">APIs Being Run:</div>
              <div className="vertical-box-container">
                {customScenario.map((item, index) => (
                  <div key={index} className="vertical-box">
                    <span className="box-title">{item.api.title}</span>
                    <span className="box-subtitle">{item.func}</span>
                    {item.input && <span className="box-input">Input: {item.input}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="all-api-container">
          <input
            type="text"
            className="search-bar"
            placeholder="Search APIs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="all-api-box">{generateVerticalBoxes()}</div>
        </div>
      </div>
  );
};

export default CustomScenario;
