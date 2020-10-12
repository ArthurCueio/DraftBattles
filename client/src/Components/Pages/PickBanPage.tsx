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
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: "bansL timer bansR" "picksL championList picksR" "emptyL button emptyR";

  ${/* TODO: Im not sure if this looks ok on bigger screens */ ""}
  height: 500px;
  width: 1200px;
`;

const PickBanPage = () => {
  return (
    <Wrapper>
      <PBContainer>
        {/**
         * TODO:
         * Using grid-area to define where everything should be is nicer.
         * But it gets confusing with components like PickList that appear twice.
         * Having to pass down more props will probably be the way.
         *
         * Can't use side prop to define that because I want the option for the
         * user to be on the left side and opponent on the right side always like
         * in the game client
         *
         * It will be like this, for now.
         */}

        {/* Blue side bans */}
        {/* Timer */}
        {/* Red side bans */}
        <PickList side={Sides.Blue} />
        <ChampionList />
        <PickList side={Sides.Red} flipped />
        {/* Something empty just to skip the grid cell */}
        {/* Pick/Ban button */}
      </PBContainer>
    </Wrapper>
  );
};

export default PickBanPage;
