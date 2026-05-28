import {
    ACTION_COSTS,
    ITEM_EFFECTS,
    STAT_LIMITS,
    SURVIVAL_PENALTIES,
} from "./balance";
import { getRandomEvent } from "./events";
import type { ActionResult, Player } from "./types";
import { getRandomWeather } from "./weather";

function clampStat(value: number): number {
  return Math.max(STAT_LIMITS.min, Math.min(STAT_LIMITS.max, value));
}

function updatePlayerStats(player: Player, changes: Partial<Player>): Player {
  return {
    ...player,
    health: clampStat(changes.health ?? player.health),
    hunger: clampStat(changes.hunger ?? player.hunger),
    thirst: clampStat(changes.thirst ?? player.thirst),
    fatigue: clampStat(changes.fatigue ?? player.fatigue),
  };
}

function applySurvivalPenalties(player: Player): Player {
  let updatedPlayer = { ...player };

  if (updatedPlayer.hunger >= SURVIVAL_PENALTIES.hungerThreshold) {
    updatedPlayer.health -= SURVIVAL_PENALTIES.hungerDamage;
  }

  if (updatedPlayer.thirst >= SURVIVAL_PENALTIES.thirstThreshold) {
    updatedPlayer.health -= SURVIVAL_PENALTIES.thirstDamage;
  }

  if (updatedPlayer.fatigue >= SURVIVAL_PENALTIES.fatigueThreshold) {
    updatedPlayer.health -= SURVIVAL_PENALTIES.fatigueDamage;
  }

  updatedPlayer.health = clampStat(updatedPlayer.health);
  updatedPlayer.isAlive = updatedPlayer.health > 0;

  return updatedPlayer;
}

function addEventLog(player: Player, message: string): Player {
  return {
    ...player,
    eventLog: [message, ...player.eventLog].slice(0, 10),
  };
}

export function scavenge(player: Player): ActionResult {
  const foodFound = Math.floor(Math.random() * 3);
  const waterFound = Math.floor(Math.random() * 3);
  const event = getRandomEvent();

  let updatedPlayer: Player = {
    ...player,
    hunger: player.hunger + ACTION_COSTS.scavenge.hunger,
    thirst: player.thirst + ACTION_COSTS.scavenge.thirst,
    fatigue: player.fatigue + ACTION_COSTS.scavenge.fatigue,
    inventory: {
      ...player.inventory,
      food: player.inventory.food + foodFound,
      water: player.inventory.water + waterFound,
    },
  };

  updatedPlayer = updatePlayerStats(updatedPlayer, updatedPlayer);
  updatedPlayer = applySurvivalPenalties(updatedPlayer);

  const message = `You scavenged the area. Found ${foodFound} food and ${waterFound} water. ${event}`;

  updatedPlayer = addEventLog(updatedPlayer, message);

  return {
    message,
    player: updatedPlayer,
  };
}

export function explore(player: Player): ActionResult {
  const medicineFound = Math.random() < 0.35 ? 1 : 0;
  const weaponFound = Math.random() < 0.25 ? 1 : 0;
  const event = getRandomEvent();

  let updatedPlayer: Player = {
    ...player,
    day: player.day + 1,
    hunger: player.hunger + ACTION_COSTS.explore.hunger,
    thirst: player.thirst + ACTION_COSTS.explore.thirst,
    fatigue: player.fatigue + ACTION_COSTS.explore.fatigue,
    currentWeather: getRandomWeather(),
    inventory: {
      ...player.inventory,
      medicine: player.inventory.medicine + medicineFound,
      weapons: player.inventory.weapons + weaponFound,
    },
  };

  updatedPlayer = updatePlayerStats(updatedPlayer, updatedPlayer);
  updatedPlayer = applySurvivalPenalties(updatedPlayer);

  const message = `You explored farther from shelter. Found ${medicineFound} medicine and ${weaponFound} weapon. ${event}`;

  updatedPlayer = addEventLog(updatedPlayer, message);

  return {
    message,
    player: updatedPlayer,
  };
}

export function rest(player: Player): ActionResult {
  let updatedPlayer: Player = {
    ...player,
    day: player.day + 1,
    hunger: player.hunger + ACTION_COSTS.rest.hunger,
    thirst: player.thirst + ACTION_COSTS.rest.thirst,
    fatigue: player.fatigue + ACTION_COSTS.rest.fatigue,
    currentWeather: getRandomWeather(),
  };

  updatedPlayer = updatePlayerStats(updatedPlayer, updatedPlayer);
  updatedPlayer = applySurvivalPenalties(updatedPlayer);

  const message = "You rested for the day and recovered some fatigue.";

  updatedPlayer = addEventLog(updatedPlayer, message);

  return {
    message,
    player: updatedPlayer,
  };
}

export function eat(player: Player): ActionResult {
  if (player.inventory.food <= 0) {
    const message = "You do not have any food left.";
    return {
      message,
      player: addEventLog(player, message),
    };
  }

  let updatedPlayer: Player = {
    ...player,
    hunger: player.hunger + ITEM_EFFECTS.food.hunger,
    health: player.health + ITEM_EFFECTS.food.health,
    inventory: {
      ...player.inventory,
      food: player.inventory.food - 1,
    },
  };

  updatedPlayer = updatePlayerStats(updatedPlayer, updatedPlayer);

  const message = "You ate some food and reduced your hunger.";

  updatedPlayer = addEventLog(updatedPlayer, message);

  return {
    message,
    player: updatedPlayer,
  };
}

export function drink(player: Player): ActionResult {
  if (player.inventory.water <= 0) {
    const message = "You do not have any water left.";
    return {
      message,
      player: addEventLog(player, message),
    };
  }

  let updatedPlayer: Player = {
    ...player,
    thirst: player.thirst + ITEM_EFFECTS.water.thirst,
    health: player.health + ITEM_EFFECTS.water.health,
    inventory: {
      ...player.inventory,
      water: player.inventory.water - 1,
    },
  };

  updatedPlayer = updatePlayerStats(updatedPlayer, updatedPlayer);

  const message = "You drank water and reduced your thirst.";

  updatedPlayer = addEventLog(updatedPlayer, message);

  return {
    message,
    player: updatedPlayer,
  };
}

export function heal(player: Player): ActionResult {
  if (player.inventory.medicine <= 0) {
    const message = "You do not have any medicine left.";
    return {
      message,
      player: addEventLog(player, message),
    };
  }

  if (player.health >= STAT_LIMITS.max) {
    const message = "You are already at full health.";
    return {
      message,
      player: addEventLog(player, message),
    };
  }

  let updatedPlayer: Player = {
    ...player,
    health: player.health + ITEM_EFFECTS.medicine.health,
    inventory: {
      ...player.inventory,
      medicine: player.inventory.medicine - 1,
    },
  };

  updatedPlayer = updatePlayerStats(updatedPlayer, updatedPlayer);

  const message = "You used medicine and recovered health.";

  updatedPlayer = addEventLog(updatedPlayer, message);

  return {
    message,
    player: updatedPlayer,
  };
}
