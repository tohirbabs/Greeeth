import React from 'react';
import { UnderstandProcess, DetectLocation, SendLocation } from '../components';

function Process() {
  return (
    <div>
      <UnderstandProcess />
      <DetectLocation />
      <SendLocation />
    </div>
  );
}

export default Process;
