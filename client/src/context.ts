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
  timer: 0,
};

export const DraftContext = React.createContext<IDraftContext>(initialValue);
