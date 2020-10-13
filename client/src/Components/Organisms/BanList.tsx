import React, { useContext } from "react";
import styled from "styled-components";
import { PickBanContext } from "../../context";
import { Sides } from "../../types";

import ChampionPortrait from "../Atoms/ChampionPortrait";

interface BanListProps {
  side: Sides;
  flipped?: boolean;
}

interface StyledBanListProps {
  flipped?: boolean;
}

const StyledBanList = styled.div<StyledBanListProps>`
  display: flex;
  flex-direction: ${(p) => (p.flipped ? "row-reverse" : "row")};
  gap: 0.5em;
`;

const BanList = ({ side, flipped }: BanListProps) => {
  const context = useContext(PickBanContext);
  return (
    <StyledBanList flipped={flipped}>
      {context.bans[side].map((ban) => {
        return <ChampionPortrait championName={ban} small />;
      })}
    </StyledBanList>
  );
};

export default BanList;
