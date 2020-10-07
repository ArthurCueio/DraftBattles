import React from "react";
import styled from "styled-components";

const CDN_BASE_URL =
  "http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/";

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
  const imgSrc = `${CDN_BASE_URL}${championName}.png`;

  return <Image alt={championName} src={imgSrc} round={round} />;
};

export default ChampionPortrait;
