import React from "react";
import { render } from "@testing-library/react";
import ChampionPortrait from "../Components/Atoms/ChampionPortrait";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { DDGRADON_PORTRAIT_URL } from "../Constants";

test("renders square champion portrait", async () => {
  const { container } = render(<ChampionPortrait championName="Annie" />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      border-radius: 0;
      max-height: 128px;
      max-width: 128px;
      width: 5em;
    }

    <img
      alt="Annie"
      class="c0"
      src="${DDGRADON_PORTRAIT_URL}Annie.png"
    />
  `);
});

test("renders round champion portrait", async () => {
  const { container } = render(<ChampionPortrait championName="Annie" round />);

  expect(container.firstChild).toMatchInlineSnapshot(`
    .c0 {
      border-radius: 50%;
      max-height: 128px;
      max-width: 128px;
      width: 5em;
    }

    <img
      alt="Annie"
      class="c0"
      src="${DDGRADON_PORTRAIT_URL}Annie.png"
    />
  `);
});
