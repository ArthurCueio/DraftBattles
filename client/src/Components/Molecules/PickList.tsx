import React, { useContext } from "react";
import { Sides } from "../../Constants";
import { PickBanContext } from "../../context";
import { IPickBansContext } from "../../types";
import styled from "styled-components";
import Pick from "./Pick";

interface PickListProps {
  side: Sides;
  flipped?: boolean;
}

const StyledPickList = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 0.5em;
`;

const PickList = ({ side, flipped }: PickListProps) => {
  const context = useContext<IPickBansContext>(PickBanContext);

  return (
    <StyledPickList>
      {context[side].picks.map((pick) => (
        <Pick key={pick} champion={pick} flipped={flipped} />
      ))}
    </StyledPickList>
  );
};

export default PickList;
