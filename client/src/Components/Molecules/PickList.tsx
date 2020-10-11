import React, { useContext } from "react";
import ChampionPortrait from "../Atoms/ChampionPortrait";
import { Sides } from "../../Constants";
import { PickBanContext } from "../../context";
import { IPickBansContext } from "../../types";
import styled from "styled-components";

interface PicKListProps {
  side: Sides;
  flipped?: boolean;
}

// Styled components
const StyledPickList = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.5em;
`;

interface StyledPickProps {
  flipped?: boolean;
}

const StyledPick = styled.div<StyledPickProps>`
  display: flex;
  flex-direction: ${(p) => (p.flipped ? "row-reverse" : "row")};
  gap: 0.5em;
  align-items: center;
`;

const PickList = ({ side, flipped }: PicKListProps) => {
  const context = useContext<IPickBansContext>(PickBanContext);

  return (
    <StyledPickList>
      {context[side].picks.map((pick) => (
        <StyledPick key={pick} flipped={flipped}>
          <ChampionPortrait championName={pick} round />
          <h3>{pick}</h3>
        </StyledPick>
      ))}
    </StyledPickList>
  );
};

export default PickList;
