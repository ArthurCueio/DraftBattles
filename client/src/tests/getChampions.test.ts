import getChampionList from "../util/getChampions";
import mockData from "./getChampionsMockData.json";
import { DDGRADON_CHAMPIONS_URL } from "../Constants";

jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());
const fetchMock = require("node-fetch");

fetchMock.get(DDGRADON_CHAMPIONS_URL, mockData, { delay: 1000 });

test("get champion list from riot CDN", async () => {
  const result = await getChampionList();

  expect(result).toEqual(["Aatrox", "Ahri", "Akali", "Alistar", "Amumu"]);
});
