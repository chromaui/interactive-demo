import { Stream } from '@nivo/stream';
import random from 'lodash/random';
import range from 'lodash/range';
import React from 'react';

const keys = ['Zol', 'Tom', 'Dom', 'Kyle', 'Gert', 'Norbert', 'Michael'];

export default function Chart() {
  return (
    <Stream
      animate
      width={900}
      height={360}
      margin={{ top: 50, right: 40, bottom: 60, left: 40 }}
      keys={keys}
      data={range(16).map(() =>
        keys.reduce((layer, key) => {
          // eslint-disable-next-line no-param-reassign
          layer[key] = random(10, 200);
          return layer;
        }, {})
      )}
    />
  );
}
