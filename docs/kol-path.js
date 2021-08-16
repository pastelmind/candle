import { KolClass } from "./kol-class.js";

/**
 * @typedef {object} KolPathInfo
 * @property {number} id
 * @property {string} name
 * @property {number | null} year Year the path was released, or `null` for
 *    paths that are always active
 * @property {number[]=} classes
 */

/** @type {readonly KolPathInfo[]} */
export const KOL_PATHS = Object.freeze([
  { id: 0, year: null, name: "Unrestricted" },
  { id: 1, year: null, name: "Boozetafarian" },
  { id: 2, year: null, name: "Teetotaler" },
  { id: 3, year: null, name: "Oxygenarian" },
  { id: 4, year: 2011, name: "Bees Hate You" },
  { id: 6, year: 2011, name: "Way of the Surprising Fist" },
  { id: 7, year: 2011, name: "Trendy" },
  {
    id: 8,
    year: 2012,
    name: "Avatar of Boris",
    classes: [KolClass.AVATAR_OF_BORIS],
  },
  { id: 9, year: 2012, name: "Bugbear Invasion" },
  {
    id: 10,
    year: 2012,
    name: "Zombie Slayer",
    classes: [KolClass.ZOMBIE_MASTER],
  },
  { id: 11, year: 2012, name: "Class Act" },
  {
    id: 12,
    year: 2013,
    name: "Avatar of Jarlsberg",
    classes: [KolClass.AVATAR_OF_JARLSBERG],
  },
  { id: 14, year: 2013, name: "BIG!" },
  { id: 15, year: 2013, name: "KoLHS" },
  { id: 16, year: 2013, name: "Class Act II" },
  {
    id: 17,
    year: 2014,
    name: "Avatar of Sneaky Pete",
    classes: [KolClass.AVATAR_OF_SNEAKY_PETE],
  },
  { id: 18, year: 2014, name: "Slow & Steady" },
  { id: 19, year: 2014, name: "Heavy Rains" },
  { id: 21, year: 2014, name: "Picky" },
  { id: 22, year: null, name: "Standard" },
  {
    id: 23,
    year: 2015,
    name: "Actually Ed the Undying",
    classes: [KolClass.ED],
  },
  { id: 24, year: 2015, name: "One Crazy Random Summer" },
  { id: 25, year: 2015, name: "Community Service" },
  {
    id: 26,
    year: 2016,
    name: "Avatar of West of Loathing",
    classes: [KolClass.COW_PUNCHER, KolClass.BEANSLINGER, KolClass.SNAKE_OILER],
  },
  { id: 27, year: 2016, name: "The Source" },
  { id: 28, year: 2016, name: "Nuclear Autumn" },
  {
    id: 29,
    year: 2017,
    name: "Gelatinous Noob",
    classes: [KolClass.GELATINOUS_NOOB],
  },
  { id: 30, year: 2017, name: "License to Adventure" },
  { id: 31, year: 2017, name: "Live. Ascend. Repeat." },
  { id: 32, year: 2018, name: "Pocket Familiars" },
  { id: 33, year: 2018, name: "G-Lover" },
  { id: 34, year: 2018, name: "Disguises Delimit" },
  {
    id: 35,
    year: 2019,
    name: "Dark Gyffte",
    classes: [KolClass.VAMPYRE],
  },
  { id: 36, year: 2019, name: "Two Crazy Random Summer" },
  { id: 37, year: 2019, name: "Exploathing" },
  {
    id: 38,
    year: 2020,
    name: "Path of the Plumber",
    classes: [KolClass.PLUMBER],
  },
  { id: 39, year: 2020, name: "Low Key Summer" },
  { id: 40, year: 2020, name: "Grey Goo" },
  { id: 41, year: 2021, name: "You, Robot" },
  { id: 42, year: 2021, name: "Quantum Terrarium" },
  { id: 43, year: 2021, name: "Wildfire" },
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
