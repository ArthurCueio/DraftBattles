import React from "react";
import styled from "styled-components";
import { DDGRADON_PORTRAIT_URL } from "../../Constants";

interface ChampionPortraitProps {
  championName: string;
  round?: boolean;
}

interface ImageProps {
  round?: boolean;
}

const Image = styled.img<ImageProps>`
  border-radius: ${(p) => (p.round ? "50%" : "0")};

  max-height: 128px;
  max-width: 128px;

  width: 5em;
`;

const ChampionPortrait = ({ championName, round }: ChampionPortraitProps) => {
  const imgSrc = `${DDGRADON_PORTRAIT_URL}${championName}.png`;

  return <Image alt={championName} src={imgSrc} round={round} />;
};

export default ChampionPortrait;
