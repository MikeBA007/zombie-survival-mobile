export type Inventory = {
  food: number;
  water: number;
  medicine: number;
  weapons: number;
};

export type WeatherCondition = {
  code: number;
  name: string;
  description: string;
};

export type Player = {
  name: string;
  location: string;
  day: number;
  health: number;
  hunger: number;
  thirst: number;
  fatigue: number;
  inventory: Inventory;
  currentWeather: WeatherCondition;
  eventLog: string[];
  isAlive: boolean;
};

export type gameAction =
  | "scavenge"
  | "explore"
  | "rest"
  | "eat"
  | "drink"
  | "heal"
  | "fight";

export type ActionResult = {
  message: string;
  player: Player;
};
