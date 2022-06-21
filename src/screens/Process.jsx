import React from 'react';
import { UnderstandProcess, DetectLocation, SendLocation } from '../components';
import PixLeftTextRight from '../components/PixLeftTextRight';

function Process() {
  //   const renderOrder = (arr) => {
  //     arr.forEach((item, i) => {
  //       if ((i + 1) % 2 === 0) {
  //         return <PixLeftTextRight ({ BG = item.BG }, { Pix = item.Pix }, { TextList = item.TextList }
  //       ) />
  //   } else {
  //       return (<PixRightTextLeft ({{ BG=item.BG }, { Pix=item.Pix }, { TextList =item.TextList }}) />)
  // }
  //     })
  //   };
  return (
    <div>
      <UnderstandProcess />
      <DetectLocation />
      <SendLocation />
    </div>
  );
}

export default Process;
