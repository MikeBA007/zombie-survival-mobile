import type { Player } from "./types";

export function savePlayer(player: Player): void {
  console.log("Saving player:", player);
}

export function loadPlayer(): Player | null {
  console.log("Loading player...");
  return null;
}

export function clearSave(): void {
  console.log("Clearing save...");
}
