import React from "react";
import { IPickBansContext } from "./types";
import { Sides } from "./Constants";

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
