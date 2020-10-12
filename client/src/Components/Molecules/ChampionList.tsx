import React, { useState, useEffect } from "react";
import styled from "styled-components";
import getChampionList from "../../util/getChampions";
import ChampionPortrait from "../Atoms/ChampionPortrait";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1em;
  overflow-x: hidden;
  height: 100%;
  padding: 0 1em;
`;

const ChampionList = () => {
  const [champs, setChamps] = useState<string[]>([]);
  const [selChamp, setSelChamp] = useState<string>("");

  useEffect(() => {
    getChampionList().then((data) => setChamps(data));
  }, []);

  return (
    <StyledWrapper>
      {champs.map((c) => (
        <ChampionPortrait
          key={`list${c}`}
          championName={c}
          selectable
          selected={selChamp === c}
          onClick={() => {
            setSelChamp(c);
          }}
        />
      ))}
    </StyledWrapper>
  );
};

export default ChampionList;
