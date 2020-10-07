import React from "react";
import { render } from "@testing-library/react";
import ChampionPortrait from "../Components/Atoms/ChampionPortrait";
import "@testing-library/jest-dom/extend-expect";

test("renders square champion portrait", async () => {
  const { getByRole } = render(<ChampionPortrait championName="Annie" />);

  const element = getByRole("img");
  expect(element).toBeVisible();
  expect(element).not.toHaveStyle(`border-radius: 50%;`);
});

test("renders round champion portrait", async () => {
  const { getByRole } = render(
    <ChampionPortrait championName={"Annie"} round />
  );

  const element = getByRole("img");
  expect(element).toBeVisible();
  expect(element).toHaveStyle(`border-radius: 50%;`);
});
