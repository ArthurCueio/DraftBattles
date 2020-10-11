import fetch from "node-fetch";
import { DDGRADON_CHAMPIONS_URL } from "../Constants";

const getChampionList = async () => {
  return await fetch(DDGRADON_CHAMPIONS_URL)
    .then((res) => res.json())
    .then((data) => Object.keys(data.data))
    .catch(console.error);
};

export default getChampionList;
