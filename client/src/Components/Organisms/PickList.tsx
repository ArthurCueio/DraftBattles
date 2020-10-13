import React, { useContext } from "react";
import { PickBanContext } from "../../context";
import { IDraftContext, Sides } from "../../types";
import styled from "styled-components";
import Pick from "../Molecules/Pick";

interface PickListProps {
  side: Sides;
  flipped?: boolean;
}

const StyledPickList = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const PickList = ({ side, flipped }: PickListProps) => {
  const context = useContext<IDraftContext>(PickBanContext);

  return (
    <StyledPickList>
      {context.picks[side].map((pick) => (
        <Pick key={pick} champion={pick} flipped={flipped} />
      ))}
    </StyledPickList>
  );
};

export default PickList;
