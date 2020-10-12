import React from "react";
import styled from "styled-components";
import ChampionPortrait from "../Atoms/ChampionPortrait";

// Styled components
const StyledPick = styled.div<StyledPickProps>`
  display: flex;
  flex-direction: ${(p) => (p.flipped ? "row-reverse" : "row")};
  gap: 0.5em;
  align-items: center;
`;

interface StyledPickProps {
  flipped?: boolean;
}

interface PickPros {
  champion: string;
  flipped?: boolean;
}

const Pick = ({ champion, flipped }: PickPros) => {
  return (
    <StyledPick flipped={flipped}>
      <ChampionPortrait championName={champion} round />
      <h3>{champion}</h3>
    </StyledPick>
  );
};

export default Pick;
