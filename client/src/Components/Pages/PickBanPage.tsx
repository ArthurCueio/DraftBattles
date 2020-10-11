import React from "react";
import styled from "styled-components";

import PickList from "../Molecules/PickList";
import ChampionList from "../Molecules/ChampionList";

import { Sides } from "../../Constants";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PBContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 65vh;
`;

const PickBanPage = () => {
  return (
    <Wrapper>
      <PBContainer>
        <PickList side={Sides.Blue} />
        <ChampionList />
        <PickList side={Sides.Red} flipped />
      </PBContainer>
    </Wrapper>
  );
};

export default PickBanPage;
