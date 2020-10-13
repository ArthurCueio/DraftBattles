import React from "react";
import PickBanPage from "./Components/Pages/PickBanPage";
import { PickBanContext } from "./context";
import { IPickBansContext, Sides } from "./types";

const App = () => {
  const testValue: IPickBansContext = {
    [Sides.Blue]: {
      picks: ["Annie", "Aphelios", "Ornn", "", ""],
      bans: ["Malzahar", "Brand", "", "", ""],
    },
    [Sides.Red]: {
      picks: ["Ryze", "AurelionSol", "Zyra", "Sion", ""],
      bans: ["Diana", "", "", "", ""],
    },
  };

  return (
    <PickBanContext.Provider value={testValue}>
      <PickBanPage />
    </PickBanContext.Provider>
  );
};

export default App;
