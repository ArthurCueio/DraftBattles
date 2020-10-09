import React from "react";
import "./App.css";
import { Sides } from "./Constants";

/* This should go on it's own file. I'm leaving it here just to test PickList*/
interface IPickBans {
  picks: string[];
  bans: string[];
}

export type IPickBansContext = {
  [key in Sides]: IPickBans;
};

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
// Types are cool

export const PickBanContext = React.createContext<IPickBansContext>(
  initialValue
);

function App() {
  return <p>Nothing here for now</p>;
}

export default App;
