"use client";

import * as React from "react";

import { NextUIProvider } from "@nextui-org/react";

export const Provider = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
