# NEXT.md

# Zombie Survival Mobile

A mobile survival dashboard game built with:

- React Native
- Expo
- TypeScript

The project begins as a dashboard-based survival simulator and is intentionally structured so the core gameplay systems can later evolve into a full 2D survival game.

---

# PROJECT VISION

## Current Goal (Option B)

Build a polished mobile survival simulator focused on:

- resource management
- weather systems
- survival decisions
- inventory management
- stat balancing
- atmospheric gameplay

The MVP is menu/dashboard driven.

No character movement or world map exists yet.

---

## Future Goal (Option C)

Expand the project into a top-down 2D survival game featuring:

- player movement
- zombie encounters
- explorable areas
- animated combat
- touch controls
- environmental hazards
- larger world systems

The current architecture should support this transition later.

---

# CORE GAMEPLAY LOOP

1. Start a new survivor
2. Begin Day 1
3. Display weather/event
4. Choose an action
5. Apply stat/inventory changes
6. Display event results
7. Advance day
8. Repeat until death

---

# CORE PLAYER STATS

```ts
health: number;
hunger: number;
thirst: number;
fatigue: number;
day: number;
location: string;
```

---

# INVENTORY SYSTEM

```ts
food: number;
water: number;
medicine: number;
weapons: number;
```

---

# MVP FEATURES

## Included In MVP

- single-player gameplay
- local save system
- weather effects
- random events
- survival stat management
- inventory system
- simple combat
- day progression
- game over system

---

## NOT Included Yet

- multiplayer
- accounts
- cloud saves
- ads
- in-app purchases
- map movement
- real-time combat
- animated characters

---

# MAIN SCREENS

## Start Screen

Purpose:

- Begin new game
- Continue saved game

Features:

- New Game button
- Continue button

---

## Survivor Setup Screen

Purpose:

- Create player profile

Features:

- Player name input
- Starting city input

---

## Dashboard Screen

Purpose:

- Main gameplay hub

Displays:

- health
- hunger
- thirst
- fatigue
- current day
- weather
- latest event

---

## Actions Screen

Purpose:

- Player decision making

Actions:

- scavenge
- explore
- rest
- eat
- drink
- heal
- fight / defend

---

## Inventory Screen

Purpose:

- Display supplies/resources

Displays:

- food
- water
- medicine
- weapons

---

## Event Log Screen

Purpose:

- Display recent game history

Shows:

- weather effects
- combat outcomes
- stat changes
- action results

---

## Game Over Screen

Purpose:

- End-of-run summary

Displays:

- days survived
- restart option

---

# TECH STACK

## Frontend

- React Native
- Expo
- TypeScript

---

## Storage

- Local device storage

---

## Future Backend Option

Potential future backend:

- Python FastAPI

Possible future backend features:

- cloud saves
- accounts
- leaderboards
- online events
- daily challenges

---

# PROJECT ARCHITECTURE

## IMPORTANT RULE

Keep gameplay systems separate from UI.

This allows the game logic to survive future UI rewrites and future transitions into a 2D game.

---

# GAME LOGIC LOCATION

```txt
src/game/
```

Contains:

- gameplay systems
- balancing
- events
- weather systems
- inventory systems
- save systems

---

# UI LOCATION

```txt
src/components/
src/screens/
```

Contains:

- screens
- buttons
- cards
- stat bars
- layout components

---

# PLANNED PROJECT STRUCTURE

```txt
src/
│
├── game/
│   ├── types.ts
│   ├── initialPlayer.ts
│   ├── actions.ts
│   ├── events.ts
│   ├── weather.ts
│   ├── balance.ts
│   └── saveSystem.ts
│
├── components/
│   ├── StatBar.tsx
│   ├── ActionButton.tsx
│   ├── InventoryCard.tsx
│   └── EventCard.tsx
│
└── screens/
    ├── StartScreen.tsx
    ├── SetupScreen.tsx
    ├── DashboardScreen.tsx
    ├── ActionsScreen.tsx
    ├── InventoryScreen.tsx
    ├── LogScreen.tsx
    └── GameOverScreen.tsx
```

---

# BUILD ROADMAP

## Phase 1 — Project Foundation

- [x] Create Expo TypeScript project
- [x] Setup GitHub repository
- [ ] Create project folder structure
- [ ] Clean starter Expo files

---

## Phase 2 — Core Systems

- [ ] Define Player type
- [ ] Create initial player data
- [ ] Build stat system
- [ ] Build inventory system
- [ ] Build weather system
- [ ] Build random event system

---

## Phase 3 — UI Development

- [ ] Build dashboard screen
- [ ] Build stat bars
- [ ] Build action buttons
- [ ] Build inventory screen
- [ ] Build event log screen
- [ ] Build game over screen

---

## Phase 4 — Gameplay

- [ ] Implement actions
- [ ] Implement combat
- [ ] Implement survival penalties
- [ ] Implement day progression
- [ ] Add balancing pass

---

## Phase 5 — Persistence

- [ ] Add local save/load system
- [ ] Add continue game support

---

## Phase 6 — Polish

- [ ] Improve UI styling
- [ ] Add animations
- [ ] Add sounds
- [ ] Improve mobile responsiveness
- [ ] Prepare Play Store assets

---

# CURRENT NEXT STEP

Create the project folder structure inside:

```txt
src/
```
