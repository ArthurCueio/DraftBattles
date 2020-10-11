import getChampionList from "../util/getChampions";
import mockData from "./getChampionsMockData.json";
import { DDGRADON_CHAMPIONS_URL } from "../Constants";
import fetchMock from "fetch-mock-jest";

fetchMock.get(DDGRADON_CHAMPIONS_URL, mockData, { delay: 1000 });

test("get champion list from riot CDN", async () => {
  const result = await getChampionList();

  expect(result).toEqual(["Aatrox", "Ahri", "Akali", "Alistar", "Amumu"]);
});
