# NEXT.md

# Zombie Survival Mobile

A mobile survival dashboard game built with:

- React Native
- Expo
- TypeScript

The project begins as a dashboard-based survival simulator and is intentionally structured so the core gameplay systems can later evolve into a full 2D survival game.

---

# PROJECT STATUS

## Current Milestone

The project has moved from setup/planning into a working prototype.

Completed so far:

- Expo React Native TypeScript project created
- GitHub repository created and pushed
- `NEXT.md` added
- Core game structure added
- Core TypeScript game logic started
- Reusable game UI components added
- First working survival dashboard added to `src/app/index.tsx`
- App runs successfully with `npm run web`

---

# PROJECT VISION

## Current Goal — Option B

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

## Future Goal — Option C

Expand the project into a top-down 2D survival game featuring:

- player movement
- zombie encounters
- explorable areas
- animated combat
- touch controls
- environmental hazards
- larger world systems

The current architecture should support this transition later by keeping game logic separate from UI.

---

# TECH STACK

## Current Stack

- React Native
- Expo
- TypeScript
- Expo Router
- Local state for current prototype

## Future Storage

- Local device storage for saves

## Future Backend Option

Potential future backend:

- Python FastAPI

Possible future backend features:

- cloud saves
- accounts
- leaderboards
- online events
- daily challenges
- weather API integration

---

# CORE GAMEPLAY LOOP

1. Start a survivor
2. Begin Day 1
3. Display weather/event
4. Choose an action
5. Apply stat/inventory changes
6. Display event results
7. Advance day when appropriate
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

# CURRENT WORKING FEATURES

## Dashboard

The current dashboard displays:

- game title
- current day
- health
- hunger
- thirst
- fatigue
- current weather
- inventory
- action buttons
- latest event
- event log

## Working Actions

The dashboard currently supports:

- scavenge
- explore
- rest
- eat
- drink
- heal

These actions currently update:

- player stats
- inventory
- weather
- event messages
- event log

---

# CURRENT PROJECT STRUCTURE

The project currently keeps the Expo starter structure in place and adds game-specific files alongside it.

Important game files:

```txt
src/
├── app/
│   └── index.tsx
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
└── components/
    └── game/
        ├── StatBar.tsx
        ├── ActionButton.tsx
        ├── InventoryCard.tsx
        └── EventCard.tsx
```

---

# ARCHITECTURE RULES

## Keep Game Logic Separate From UI

Game logic belongs in:

```txt
src/game/
```

Reusable game UI belongs in:

```txt
src/components/game/
```

Expo Router screens/routes belong in:

```txt
src/app/
```

This helps the project stay flexible if the game later transitions into a 2D survival game.

---

# IMPORTANT DECISIONS

## Do Not Refactor Starter Files Right Now

The project is currently stable.

For now:

- do not delete more Expo starter files
- do not restructure the router setup
- do not aggressively clean the template
- add new game code alongside the existing working setup

Refactoring can happen later when the project has more working features.

---

# COMPLETED FILES

## Game Logic

- [x] `src/game/types.ts`
- [x] `src/game/initialPlayer.ts`
- [x] `src/game/balance.ts`
- [x] `src/game/weather.ts`
- [x] `src/game/events.ts`
- [x] `src/game/actions.ts`
- [x] `src/game/saveSystem.ts`

## Game Components

- [x] `src/components/game/StatBar.tsx`
- [x] `src/components/game/ActionButton.tsx`
- [x] `src/components/game/InventoryCard.tsx`
- [x] `src/components/game/EventCard.tsx`

## Screens

- [x] First working dashboard in `src/app/index.tsx`

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

## Not Included Yet

- multiplayer
- accounts
- cloud saves
- ads
- in-app purchases
- map movement
- real-time combat
- animated characters

---

# BUILD ROADMAP

## Phase 1 — Project Foundation

- [x] Create Expo TypeScript project
- [x] Set up GitHub repository
- [x] Add project roadmap
- [x] Add game folder structure
- [x] Add reusable game component structure

---

## Phase 2 — Core Systems

- [x] Define Player type
- [x] Create initial player data
- [x] Add balance constants
- [x] Add basic weather system
- [x] Add basic random event system
- [x] Add core action logic
- [x] Add placeholder save system

---

## Phase 3 — First UI Prototype

- [x] Build dashboard screen
- [x] Display player stats
- [x] Display weather
- [x] Display inventory
- [x] Display actions
- [x] Display latest event
- [x] Display event log

---

## Phase 4 — Gameplay Improvements

- [ ] Improve `StatBar` visuals
- [ ] Make health visually good when high and bad when low
- [ ] Make hunger, thirst, and fatigue visually good when low and bad when high
- [ ] Add game-over/death handling
- [ ] Prevent actions after death
- [ ] Add fight/combat action
- [ ] Improve event messages
- [ ] Improve action result variety
- [ ] Add better survival balancing

---

## Phase 5 — Persistence

- [ ] Replace placeholder save system with real local storage
- [ ] Add save game support
- [ ] Add continue game support
- [ ] Add clear save/restart support

---

## Phase 6 — Mobile Polish

- [ ] Improve dashboard spacing for phone screens
- [ ] Improve typography
- [ ] Add app theme/colors
- [ ] Add icons
- [ ] Add basic animations
- [ ] Add sound effects
- [ ] Improve Play Store screenshot readiness

---

## Phase 7 — Future Expansion

- [ ] Add multiple screens/routes
- [ ] Add setup screen
- [ ] Add inventory screen
- [ ] Add event log screen
- [ ] Add game over screen
- [ ] Add difficulty settings
- [ ] Add deeper weather effects
- [ ] Add future backend planning

---

# CURRENT NEXT STEP

Improve:

```txt
src/components/game/StatBar.tsx
```

Goal:

- Health should look good when high and dangerous when low.
- Hunger, thirst, and fatigue should work the opposite way.
- Low hunger/thirst/fatigue should look safe.
- High hunger/thirst/fatigue should look dangerous.
- Right now all bars are green, which is misleading.

---

# AFTER THAT

Next planned steps:

1. Add game-over/death handling
2. Add fight/combat action
3. Improve event messages
4. Add real local save/load
5. Add mobile polish
