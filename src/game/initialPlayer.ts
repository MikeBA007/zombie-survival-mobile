import type { Player } from "./types";

export const initialPlayer: Player = {
  name: "",
  location: "",
  day: 1,
  health: 100,
  hunger: 0,
  thirst: 0,
  fatigue: 0,
  inventory: {
    food: 3,
    water: 3,
    medicine: 1,
    weapons: 1,
  },
  currentWeather: {
    code: 0,
    name: "Clear",
    description: "The weather is clear.",
  },
  eventLog: ["Your survival story begins."],
  isAlive: true,
};
