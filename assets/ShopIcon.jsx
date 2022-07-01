/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";

function ShopIcon(props) {
  return (
    <svg
      width="36"
      height="32"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.2 0.645264H1.8C1.32261 0.645264 0.864773 0.834906 0.527208 1.17247C0.189642 1.51004 0 1.96787 0 2.44526V27.6453C0 28.6 0.379284 29.5157 1.05442 30.1908C1.72955 30.866 2.64522 31.2453 3.6 31.2453H32.4C33.3548 31.2453 34.2705 30.866 34.9456 30.1908C35.6207 29.5157 36 28.6 36 27.6453V2.44526C36 1.96787 35.8104 1.51004 35.4728 1.17247C35.1352 0.834906 34.6774 0.645264 34.2 0.645264V0.645264ZM18 16.8453C12.0438 16.8453 7.2 12.0015 7.2 6.04526H10.8C10.8 10.0161 14.0292 13.2453 18 13.2453C21.9708 13.2453 25.2 10.0161 25.2 6.04526H28.8C28.8 12.0015 23.9562 16.8453 18 16.8453Z"
        fill="#028000"
      />
    </svg>

    // <svg className="" width={32} height={32} viewBox="0 0 512 512" {...props}>
    //   <title>Bag Handle</title>
    //   <path
    //     fill="none"
    //     stroke="currentColor"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={42}
    //     d="M80 176a16 16 0 00-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 00-16-16zM160 176v-32a96 96 0 0196-96h0a96 96 0 0196 96v32"
    //   />
    //   <path
    //     fill="none"
    //     stroke="currentColor"
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //     strokeWidth={32}
    //     d="M160 224v16a96 96 0 0096 96h0a96 96 0 0096-96v-16"
    //   />

    // </svg>
  );
}

export default ShopIcon;
