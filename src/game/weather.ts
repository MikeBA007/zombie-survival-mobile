import type { WeatherCondition } from "./types";

export const weatherConditions: WeatherCondition[] = [
  {
    code: 0,
    name: "Clear",
    description: "The skies are clear for now.",
  },
  {
    code: 1,
    name: "Cloudy",
    description: "Heavy clouds block the sun and make the day feel longer.",
  },
  {
    code: 2,
    name: "Rain",
    description: "Rain makes movement slower and supplies harder to find.",
  },
  {
    code: 3,
    name: "Storm",
    description: "The storm makes every decision more dangerous.",
  },
  {
    code: 4,
    name: "Fog",
    description: "Thick fog limits visibility and raises the risk of ambush.",
  },
  {
    code: 5,
    name: "Cold",
    description: "The cold drains energy faster than usual.",
  },
];

export function getRandomWeather(): WeatherCondition {
  const randomIndex = Math.floor(Math.random() * weatherConditions.length);
  return weatherConditions[randomIndex];
}
