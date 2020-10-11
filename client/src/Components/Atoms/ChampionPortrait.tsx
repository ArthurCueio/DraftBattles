import React from "react";
import styled, { css } from "styled-components";
import { DDGRADON_PORTRAIT_URL } from "../../Constants";

interface ChampionPortraitProps {
  championName: string;
  round?: boolean;
  selectable?: boolean;
  onClick?(): any;
  selected?: boolean;
}

interface ImageProps {
  round?: boolean;
  selectable?: boolean;
  selected?: boolean;
}

const Image = styled.img<ImageProps>`
  border-radius: ${(p) => (p.round ? "50%" : "0")};

  max-height: 128px;
  max-width: 128px;

  width: 5em;

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
  onClick,
}: ChampionPortraitProps) => {
  const imgSrc = `${DDGRADON_PORTRAIT_URL}${championName}.png`;

  return (
    <Image
      alt={championName}
      src={imgSrc}
      round={round}
      selectable={selectable}
      selected={selected}
      onClick={onClick}
    />
  );
};

export default ChampionPortrait;
