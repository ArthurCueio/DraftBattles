import React from "react";
import { IDraftContext, RoundType, Sides } from "./types";

const initialValue: IDraftContext = {
  picks: {
    [Sides.Blue]: ["", "", "", "", ""],
    [Sides.Red]: ["", "", "", "", ""],
  },
  bans: {
    [Sides.Blue]: ["", "", "", "", ""],
    [Sides.Red]: ["", "", "", "", ""],
  },
  round: {
    type: RoundType.Ban,
    side: Sides.Blue,
    id: 1,
  },
};

export const PickBanContext = React.createContext<IDraftContext>(
  initialValue
);
