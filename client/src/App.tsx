import React from "react";
import "./App.css";
import PickBanPage from "./Components/Pages/PickBanPage";
import { PickBanContext } from "./context";
import { IPickBansContext } from "./types";
import { Sides } from "./Constants";

const App = () => {
  const testValue: IPickBansContext = {
    [Sides.Blue]: {
      picks: ["Annie", "Aphelios", "Ornn", "", ""],
      bans: ["", "", "", "", ""],
    },
    [Sides.Red]: {
      picks: ["Ryze", "AurelionSol", "Zyra", "Sion", ""],
      bans: ["", "", "", "", ""],
    },
  };

  return (
    <PickBanContext.Provider value={testValue}>
      <PickBanPage />
    </PickBanContext.Provider>
  );
};

export default App;
