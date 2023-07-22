"use client"
// import {Loader} from 'react-loader-spinner';

import { BeatLoader } from "react-spinners";
export const Spinner = () => {
  return (
    // <div>
    //   {/* Your component content */}
    //   <BeatLoader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    // </div>

    <div className="loading-spinner">
      <BeatLoader color="#00BFFF" size={80} />
    </div>
  );
};