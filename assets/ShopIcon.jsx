/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';

function ShopIcon(props) {
  return (
    <svg className="" width={32} height={32} viewBox="0 0 512 512" {...props}>
      <title>Bag Handle</title>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={42}
        d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
      />
    </svg>
  );
}

export default ShopIcon;
