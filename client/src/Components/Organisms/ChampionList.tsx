import React, { useState, useEffect, useContext, useMemo } from "react";
import styled from "styled-components";
import getChampionList from "../../util/getChampions";
import ChampionPortrait from "../Atoms/ChampionPortrait";
import { PickBanContext } from "../../context";
import { Sides } from "../../types";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1em;
  overflow-x: hidden;
  margin: 1em;
`;

const ChampionList = () => {
  const [champs, setChamps] = useState<string[]>([]);
  const [selChamp, setSelChamp] = useState<string>("");

  useEffect(() => {
    getChampionList().then((data) => setChamps(data));
  }, []);

  const context = useContext(PickBanContext);

  const allBans = useMemo(() => {
    return [...context.bans[Sides.Blue], ...context.bans[Sides.Red]];
  }, [context]);

  const isBanned = (champion: string) => {
    return allBans.includes(champion);
  };

  return (
    <StyledWrapper>
      {champs.map((c) => (
        <ChampionPortrait
          key={`list${c}`}
          championName={c}
          selectable
          selected={selChamp === c}
          disabled={isBanned(c)}
          onClick={() => {
            setSelChamp(c);
          }}
        />
      ))}
    </StyledWrapper>
  );
};

export default ChampionList;
