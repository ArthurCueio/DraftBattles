export enum Sides {
  Blue,
  Red,
}

export interface IPickBans {
  picks: string[];
  bans: string[];
}

export type IPickBansContext = {
  [key in Sides]: IPickBans;
};