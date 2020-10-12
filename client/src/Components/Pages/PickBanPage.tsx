import React from "react";
import styled from "styled-components";

import PickList from "../Organisms/PickList";
import ChampionList from "../Molecules/ChampionList";

import { Sides } from "../../Constants";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PBContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas: "bansL timer bansR" "picksL championList picksR" "emptyL button emptyR";
  height: 65vh;
  width: 1200px;
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
