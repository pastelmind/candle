import { KolClass } from "./kol-class.js";

const KolPath = Object.freeze({
  AVATAR_OF_BORIS: 8,
  ZOMBIE_SLAYER: 10,
  AVATAR_OF_JARLSBERG: 12,
  AVATAR_OF_SNEAKY_PETE: 17,
  ACTUALLY_ED_THE_UNDYING: 23,
  AVATAR_OF_WEST_OF_LOATHING: 26,
  GELATINOUS_NOOB: 29,
  DARK_GYFFTE: 35,
  PATH_OF_THE_PLUMBER: 38,
});

/**
 * @typedef {object} KolPathInfo
 * @property {number} id
 * @property {string} name
 * @property {number[]=} classes
 */

/** @type {readonly KolPathInfo[]} */
export const KOL_PATHS = Object.freeze([
  { id: 0, name: "Unrestricted" },
  { id: 1, name: "Boozetafarian" },
  { id: 2, name: "Teetotaler" },
  { id: 3, name: "Oxygenarian" },
  { id: 4, name: "Bees Hate You" },
  { id: 6, name: "Way of the Surprising Fist" },
  { id: 7, name: "Trendy" },
  {
    id: KolPath.AVATAR_OF_BORIS,
    name: "Avatar of Boris",
    classes: [KolClass.AVATAR_OF_BORIS],
  },
  { id: 9, name: "Bugbear Invasion" },
  {
    id: KolPath.ZOMBIE_SLAYER,
    name: "Zombie Slayer",
    classes: [KolClass.ZOMBIE_MASTER],
  },
  { id: 11, name: "Class Act" },
  {
    id: KolPath.AVATAR_OF_JARLSBERG,
    name: "Avatar of Jarlsberg",
    classes: [KolClass.AVATAR_OF_JARLSBERG],
  },
  { id: 14, name: "BIG!" },
  { id: 15, name: "KoLHS" },
  { id: 16, name: "Class Act II" },
  {
    id: KolPath.AVATAR_OF_SNEAKY_PETE,
    name: "Avatar of Sneaky Pete",
    classes: [KolClass.AVATAR_OF_SNEAKY_PETE],
  },
  { id: 18, name: "Slow & Steady" },
  { id: 19, name: "Heavy Rains" },
  { id: 21, name: "Picky" },
  { id: 22, name: "Standard" },
  {
    id: KolPath.ACTUALLY_ED_THE_UNDYING,
    name: "Actually Ed the Undying",
    classes: [KolClass.ED],
  },
  { id: 24, name: "One Crazy Random Summer" },
  { id: 25, name: "Community Service" },
  {
    id: KolPath.AVATAR_OF_WEST_OF_LOATHING,
    name: "Avatar of West of Loathing",
    classes: [KolClass.COW_PUNCHER, KolClass.BEANSLINGER, KolClass.SNAKE_OILER],
  },
  { id: 27, name: "The Source" },
  { id: 28, name: "Nuclear Autumn" },
  {
    id: KolPath.GELATINOUS_NOOB,
    name: "Gelatinous Noob",
    classes: [KolClass.GELATINOUS_NOOB],
  },
  { id: 30, name: "License to Adventure" },
  { id: 31, name: "Live. Ascend. Repeat." },
  { id: 32, name: "Pocket Familiars" },
  { id: 33, name: "G-Lover" },
  { id: 34, name: "Disguises Delimit" },
  { id: KolPath.DARK_GYFFTE, name: "Dark Gyffte", classes: [KolClass.VAMPYRE] },
  { id: 36, name: "Two Crazy Random Summer" },
  { id: 37, name: "Exploathing" },
  {
    id: KolPath.PATH_OF_THE_PLUMBER,
    name: "Path of the Plumber",
    classes: [KolClass.PLUMBER],
  },
  { id: 39, name: "Low Key Summer" },
  { id: 40, name: "Grey Goo" },
  { id: 41, name: "You, Robot" },
  { id: 42, name: "Quantum Terrarium" },
  { id: 43, name: "(Fall 2021 Path)" },
]);

const kolPathById = new Map(KOL_PATHS.map((path) => [path.id, path]));

/**
 * @param {number} kolPathId
 * @return {number[]}
 */
export function getValidClassesForPath(kolPathId) {
  return (
    kolPathById.get(kolPathId)?.classes || [
      KolClass.SEAL_CLUBBER,
      KolClass.TURTLE_TAMER,
      KolClass.PASTAMANCER,
      KolClass.SAUCEROR,
      KolClass.DISCO_BANDIT,
      KolClass.ACCORDION_THIEF,
    ]
  );
}
