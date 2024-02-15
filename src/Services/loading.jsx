// Circular loading spinner with multiple circles
import React from "react";
import { Circles, ColorRing } from "react-loader-spinner";

// Circular loading spinner with multiple circles
export function CircularLoadingWithMultipleCircle({ height = 80, width = 80, color = "#4fa94d" }) {
  return (
    <Circles
      height={height}
      width={width}
      color={color}
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}

// Color ring loading spinner
export function ColorRingLoading({ height = 25, width = 40, colors = ["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"] }) {
  return (
    <ColorRing
      visible={true}
      height={height}
      width={width}
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={colors}
    />
  );
}
