import React from "react";
import { render } from "@testing-library/react";
import PickList from "../Components/Molecules/PickList";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { PickBanContext, IPickBansContext } from "../App";
import { Sides, DDGRADON_BASE_URL } from "../Constants";

const testValue: IPickBansContext = {
  [Sides.Blue]: {
    picks: ["Annie", "Aatrox", "Ornn", "Graves", "Gragas"],
    bans: ["", "", "", "", ""],
  },
  [Sides.Red]: {
    picks: ["Ryze", "AurelionSol", "Zyra", "Sion", "Karthus"],
    bans: ["", "", "", "", ""],
  },
};

test("Renders left side (flipped = false) properly", async () => {
  const { container } = render(
    <PickBanContext.Provider value={testValue}>
      <PickList side={Sides.Blue} />
    </PickBanContext.Provider>
  );

  expect(container).toMatchInlineSnapshot(`
    .c2 {
      border-radius: 50%;
      max-height: 128px;
      max-width: 128px;
      width: 5em;
    }

    .c0 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 0.5em;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      gap: 0.5em;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    <div>
      <div
        class="c0"
      >
        <div
          class="c1"
        >
          <img
            alt="Annie"
            class="c2"
            src="${DDGRADON_BASE_URL}Annie.png"
          />
          <h3>
            Annie
          </h3>
        </div>
        <div
          class="c1"
        >
          <img
            alt="Aatrox"
            class="c2"
            src="${DDGRADON_BASE_URL}Aatrox.png"
          />
          <h3>
            Aatrox
          </h3>
        </div>
        <div
          class="c1"
        >
          <img
            alt="Ornn"
            class="c2"
            src="${DDGRADON_BASE_URL}Ornn.png"
          />
          <h3>
            Ornn
          </h3>
        </div>
        <div
          class="c1"
        >
          <img
            alt="Graves"
            class="c2"
            src="${DDGRADON_BASE_URL}Graves.png"
          />
          <h3>
            Graves
          </h3>
        </div>
        <div
          class="c1"
        >
          <img
            alt="Gragas"
            class="c2"
            src="${DDGRADON_BASE_URL}Gragas.png"
          />
          <h3>
            Gragas
          </h3>
        </div>
      </div>
    </div>
  `);
});

test("Renders right side (flipped = true) properly", async () => {
  const { container } = render(
    <PickBanContext.Provider value={testValue}>
      <PickList side={Sides.Red} flipped />
    </PickBanContext.Provider>
  );

  expect(container).toMatchInlineSnapshot(`
    .c2 {
      border-radius: 50%;
      max-height: 128px;
      max-width: 128px;
      width: 5em;
    }

    .c0 {
      display: -webkit-inline-box;
      display: -webkit-inline-flex;
      display: -ms-inline-flexbox;
      display: inline-flex;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      gap: 0.5em;
    }

    .c1 {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-flex-direction: row-reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
      gap: 0.5em;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
    }

    <div>
      <div
        class="c0"
      >
        <div
          class="c1"
        >
          <img
            alt="Ryze"
            class="c2"
            src="${DDGRADON_BASE_URL}Ryze.png"
          />
          <h3>
            Ryze
          </h3>
        </div>
        <div
          class="c1"
        >
          <img
            alt="AurelionSol"
            class="c2"
            src="${DDGRADON_BASE_URL}AurelionSol.png"
          />
          <h3>
            AurelionSol
          </h3>
        </div>
        <div
          class="c1"
        >
          <img
            alt="Zyra"
            class="c2"
            src="${DDGRADON_BASE_URL}Zyra.png"
          />
          <h3>
            Zyra
          </h3>
        </div>
        <div
          class="c1"
        >
          <img
            alt="Sion"
            class="c2"
            src="${DDGRADON_BASE_URL}Sion.png"
          />
          <h3>
            Sion
          </h3>
        </div>
        <div
          class="c1"
        >
          <img
            alt="Karthus"
            class="c2"
            src="${DDGRADON_BASE_URL}Karthus.png"
          />
          <h3>
            Karthus
          </h3>
        </div>
      </div>
    </div>
  `);
});
