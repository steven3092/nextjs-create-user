"use client";
import React from "react";

export const RedCross = ({
  width,
  height,
  color,
}: {
  width: string;
  height: string;
  color: string;
}) => (
  <svg
    version="1.0"
    width={width}
    height={height}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    preserveAspectRatio="xMidYMid meet"
  >
    <path
      fill={color}
      d="M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z"
    />
  </svg>
);
