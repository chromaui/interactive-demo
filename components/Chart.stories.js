import React from 'react';
import Chart from './Chart';
import isChromatic from 'storybook-chromatic/isChromatic';

// WARNING: Best not to change much in here. The place that depends on this
// component in the Chromatic codebase depends on the values defined here
// (title, story name, etc.) so changing that will break the integration.
export default {
  title: 'Chart',
  component: Chart,
  decorators: [
    storyFn =>
      isChromatic() ? (
        <div style={{ height: '300px', width: '100%', maxWidth: 800, display: 'inline-block' }}>
          {storyFn()}
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
          }}
        >
          <div style={{ height: '300px', width: '100%', maxWidth: 800 }}>{storyFn()}</div>
        </div>
      ),
  ],
};

export const Derp = () => <Chart />;
