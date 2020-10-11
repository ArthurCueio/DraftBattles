import fetch from "node-fetch";
import { DDGRADON_CHAMPIONS_URL } from "../Constants";

const getChampionList = async () => {
  return await fetch(DDGRADON_CHAMPIONS_URL)
    .then((res) => res.json())
    .then((data) => Object.keys(data.data))
    .catch((err) => {
      console.error(err);
      return [] as string[];
    });
};

export default getChampionList;
