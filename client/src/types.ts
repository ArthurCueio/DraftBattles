import { Sides } from "./Constants";

export interface IPickBans {
  picks: string[];
  bans: string[];
}

export type IPickBansContext = {
  [key in Sides]: IPickBans;
};
