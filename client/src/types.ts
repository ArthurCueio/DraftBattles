export enum Sides {
  Blue,
  Red,
}

export type Picks = {
  [key in Sides]: string[];
};

export type Bans = {
  [key in Sides]: string[];
};

export interface IDraftContext {
  picks: Picks;
  bans: Bans;
  round: Round;
  timer: Number;
}

export enum RoundType {
  Pick,
  Ban,
}

export interface Round {
  side: Sides;
  type: RoundType;
  id: 1 | 2 | 3 | 4 | 5;
}
