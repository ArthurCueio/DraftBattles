import React from "react";
import styled from "styled-components";
import PickList from "../Organisms/PickList";
import ChampionList from "../Organisms/ChampionList";
import BanList from "../Organisms/BanList";
import StyledButton from "../Atoms/Button";
import { Sides } from "../../types";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PBContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr 3fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas: "bansL timer bansR" "picksL championList picksR" "emptyL button emptyR";
  justify-content: center;
  align-content: center;

  ${/* TODO: Im not sure if this looks ok on bigger screens */ ""}
  height: 90vh;
  width: 1200px;

  max-height: 700px;

  background: #001a31;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  padding: 1em;
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

        <BanList side={Sides.Blue} />
        <p>I'm a place holder for timer</p>
        <BanList side={Sides.Red} flipped />
        <PickList side={Sides.Blue} />
        <ChampionList />
        <PickList side={Sides.Red} flipped />
        {/* Something empty just to skip the grid cell */}
        <p></p>
        <StyledButton>Pick</StyledButton>
      </PBContainer>
    </Wrapper>
  );
};

export default PickBanPage;
