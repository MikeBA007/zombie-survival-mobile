export const STAT_LIMITS = {
  min: 0,
  max: 100,
};

export const STARTING_SUPPLIES = {
  food: 3,
  water: 3,
  medicine: 1,
  weapons: 1,
};

export const ACTION_COSTS = {
  scavenge: {
    hunger: 8,
    thirst: 8,
    fatigue: 12,
  },
  explore: {
    hunger: 10,
    thirst: 10,
    fatigue: 15,
  },
  rest: {
    hunger: 5,
    thirst: 5,
    fatigue: -25,
  },
};

export const ITEM_EFFECTS = {
  food: {
    hunger: -25,
    health: 5,
  },
  water: {
    thirst: -25,
    health: 5,
  },
  medicine: {
    health: 25,
  },
};

export const SURVIVAL_PENALTIES = {
  hungerThreshold: 80,
  thirstThreshold: 80,
  fatigueThreshold: 90,
  hungerDamage: 8,
  thirstDamage: 10,
  fatigueDamage: 6,
};
