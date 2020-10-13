import React from "react";
import PickBanPage from "./Components/Pages/PickBanPage";
import { PickBanContext } from "./context";
import { IDraftContext, RoundType, Sides } from "./types";

const App = () => {
  const testValue: IDraftContext = {
    picks: {
      [Sides.Blue]: ["Annie", "Aphelios", "Ornn", "", ""],
      [Sides.Red]: ["Ryze", "AurelionSol", "Zyra", "Sion", ""],
    },
    bans: {
      [Sides.Blue]: ["Malzahar", "Brand", "", "", ""],
      [Sides.Red]: ["Diana", "", "", "", ""],
    },
    round: {
      type: RoundType.Pick,
      side: Sides.Blue,
      id: 4,
    },
  };

  return (
    <PickBanContext.Provider value={testValue}>
      <PickBanPage />
    </PickBanContext.Provider>
  );
};

export default App;
