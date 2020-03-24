import { Stream } from '@nivo/stream';
import random from 'lodash/random';
import range from 'lodash/range';
import React from 'react';

const keys = ['Zol', 'Tom', 'Dom', 'Kyle', 'Gert', 'Norbert', 'Michael'];

const data = [
  { Zol: 79, Tom: 80, Dom: 39, Kyle: 88, Gert: 142, Norbert: 106, Michael: 117 },
  { Zol: 90, Tom: 50, Dom: 18, Kyle: 93, Gert: 189, Norbert: 192, Michael: 21 },
  { Zol: 42, Tom: 125, Dom: 79, Kyle: 49, Gert: 180, Norbert: 135, Michael: 124 },
  { Zol: 42, Tom: 134, Dom: 102, Kyle: 130, Gert: 156, Norbert: 162, Michael: 176 },
  { Zol: 48, Tom: 94, Dom: 153, Kyle: 31, Gert: 20, Norbert: 136, Michael: 164 },
  { Zol: 166, Tom: 59, Dom: 91, Kyle: 183, Gert: 72, Norbert: 141, Michael: 53 },
  { Zol: 191, Tom: 76, Dom: 49, Kyle: 192, Gert: 22, Norbert: 75, Michael: 75 },
  { Zol: 48, Tom: 140, Dom: 91, Kyle: 18, Gert: 33, Norbert: 158, Michael: 15 },
  { Zol: 141, Tom: 144, Dom: 153, Kyle: 191, Gert: 145, Norbert: 199, Michael: 37 },
  { Zol: 81, Tom: 179, Dom: 182, Kyle: 36, Gert: 34, Norbert: 106, Michael: 35 },
  { Zol: 154, Tom: 173, Dom: 69, Kyle: 198, Gert: 152, Norbert: 128, Michael: 194 },
  { Zol: 175, Tom: 25, Dom: 103, Kyle: 126, Gert: 186, Norbert: 132, Michael: 119 },
  { Zol: 93, Tom: 177, Dom: 189, Kyle: 126, Gert: 142, Norbert: 168, Michael: 86 },
  { Zol: 29, Tom: 158, Dom: 16, Kyle: 195, Gert: 28, Norbert: 171, Michael: 14 },
  { Zol: 24, Tom: 87, Dom: 162, Kyle: 173, Gert: 43, Norbert: 140, Michael: 150 },
  { Zol: 79, Tom: 155, Dom: 116, Kyle: 34, Gert: 199, Norbert: 34, Michael: 36 },
];

export default function Chart() {
  return (
    <Stream
      animate
      width={900}
      height={360}
      margin={{ top: 50, right: 40, bottom: 60, left: 40 }}
      keys={keys}
      data={data}
    />
  );
}
