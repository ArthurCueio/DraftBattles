import React from "react";
import { IPickBansContext, Sides } from "./types";

const initialValue: IPickBansContext = {
  [Sides.Blue]: {
    picks: ["", "", "", "", ""],
    bans: ["", "", "", "", ""],
  },
  [Sides.Red]: {
    picks: ["", "", "", "", ""],
    bans: ["", "", "", "", ""],
  },
};

export const PickBanContext = React.createContext<IPickBansContext>(
  initialValue
);
