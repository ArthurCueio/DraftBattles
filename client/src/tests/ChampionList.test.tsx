import React from "react";
import { render, act } from "@testing-library/react";
import ChampionList from "../Components/Organisms/ChampionList";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

jest.mock("../util/getChampions");

test("Renders properly", async () => {
  let container = null;

  await act(async () => {
    container = render(<ChampionList />).container;
  });

  expect(container).toMatchInlineSnapshot(`
    .c1 {
      border-radius: 0;
      max-height: 128px;
      max-width: 128px;
      width: 5em;
    }

    .c1:hover {
      cursor: pointer;
      outline: red solid 0.2em;
    }

    .c0 {
      display: grid;
      grid-template-columns: repeat(6,1fr);
      gap: 1em;
      overflow-x: hidden;
      height: 100%;
      padding: 0 1em;
    }

    <div>
      <div
        class="c0"
      >
        <img
          alt="Aatrox"
          class="c1"
          src="http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/Aatrox.png"
        />
        <img
          alt="Ahri"
          class="c1"
          src="http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/Ahri.png"
        />
        <img
          alt="Akali"
          class="c1"
          src="http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/Akali.png"
        />
        <img
          alt="Alistar"
          class="c1"
          src="http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/Alistar.png"
        />
        <img
          alt="Amumu"
          class="c1"
          src="http://ddragon.leagueoflegends.com/cdn/10.20.1/img/champion/Amumu.png"
        />
      </div>
    </div>
  `);
});
