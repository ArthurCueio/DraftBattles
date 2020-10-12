import React from "react";
import styled, { css } from "styled-components";
import { DDGRADON_PORTRAIT_URL, DDGRAGON_NOICON_URL } from "../../Constants";

interface ChampionPortraitProps {
  championName: string;
  round?: boolean;
  selectable?: boolean;
  onClick?(): any;
  selected?: boolean;
  small?: boolean;
}

interface ImageProps {
  round?: boolean;
  selectable?: boolean;
  selected?: boolean;
  small?: boolean;
}

const Image = styled.img<ImageProps>`
  border-radius: ${(p) => (p.round ? "50%" : "0")};

  max-height: 128px;
  max-width: 128px;

  width: ${(p) => (p.small ? "2.5em" : "5em")};
  height: ${(p) => (p.small ? "2.5em" : "5em")};

  ${(p) =>
    p.selected &&
    css`
       {
        /* TODO: Get outline colors from League client and change this*/
      }
      outline: green solid 0.2em;
    `}

  ${(p) =>
    p.selectable &&
    css`
      &:hover {
        cursor: pointer;
         {
          /* TODO: Get outline colors from League client and change this*/
        }
        outline: red solid 0.2em;
      }
    `}
`;

const ChampionPortrait = ({
  championName,
  round,
  selectable,
  selected,
  small,
  onClick,
}: ChampionPortraitProps) => {
  let imgSrc = `${DDGRADON_PORTRAIT_URL}${championName}.png`;

  if (championName === "") {
    imgSrc = DDGRAGON_NOICON_URL;
  }

  return (
    <Image
      alt={championName}
      src={imgSrc}
      round={round}
      selectable={selectable}
      selected={selected}
      small={small}
      onClick={onClick}
    />
  );
};

export default ChampionPortrait;
