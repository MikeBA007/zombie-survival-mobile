export const randomEvents = [
  "You hear distant groans echoing through the streets.",
  "A broken-down car blocks part of the road.",
  "You find signs that another survivor passed through recently.",
  "The area feels quiet. Too quiet.",
  "A sudden noise makes you stop in your tracks.",
  "You spot movement in the distance but cannot tell what it is.",
  "The wind carries the smell of smoke from somewhere nearby.",
  "You find old footprints in the mud.",
  "A nearby building creaks as the weather shifts.",
  "You feel like something is watching you.",
];

export function getRandomEvent(): string {
  const randomIndex = Math.floor(Math.random() * randomEvents.length);
  return randomEvents[randomIndex];
}
