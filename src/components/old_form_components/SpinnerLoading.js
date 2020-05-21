import React from "react";
import Loader from "react-loader-spinner";

const SpinnerLoading = ({ type, color, height, width, timeout }) => {
  return (
    <Loader
      type={type ? type : "Puff"}
      color={color ? color : "#00BFFF"}
      height={height ? height : 50}
      width={width ? width : 50}
      timeout={timeout ? timeout : 10000}
    />
  );
};

export default SpinnerLoading;
