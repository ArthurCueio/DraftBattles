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
  disabled?: boolean;
}

interface ImageProps {
  round?: boolean;
  selectable?: boolean;
  selected?: boolean;
  small?: boolean;
  disabled?: boolean;
}

const Image = styled.img<ImageProps>`
  border-radius: ${(p) => (p.round ? "50%" : "0")};
  border: #544121 solid 0.15em;

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
    !p.disabled &&
    css`
      &:hover {
        cursor: pointer;
         {
          /* TODO: Get outline colors from League client and change this*/
        }
        outline: red solid 0.2em;
      }
    `}
  
  ${(p) =>
    p.disabled &&
    css`
      filter: grayscale(100%);
    `}
`;

const ChampionPortrait = ({
  championName,
  round,
  selectable,
  selected,
  small,
  disabled,
  onClick,
}: ChampionPortraitProps) => {
  let imgSrc = `${DDGRADON_PORTRAIT_URL}${championName}.png`;

  if (championName === "") {
    imgSrc = DDGRAGON_NOICON_URL;
  }

  if (disabled) {
    onClick = undefined;
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
      disabled={disabled}
    />
  );
};

export default ChampionPortrait;
