import React from 'react';
import Chart from './Chart';

// WARNING: Best not to change anyting in here. The place that imports this
// component depends on the values defined here (title, story name, etc.) so
// changing that will break the integration.
export default {
  title: 'Chart',
};

export const Base = () => <Chart />;
