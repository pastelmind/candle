/**
 * @typedef {object} CandleData
 * @property {string} name
 * @property {string} type
 * @property {string} effect
 */

export const EQUIP_EXTRA_LARGE_UTILITY_CANDLE = {
  id: 10779,
  name: "extra-large utility candle",
  type: "Weapon (1-handed club)",
  effect: "+25% Items, +50 Hot Dmg",
};
export const EQUIP_RUNED_TAPER_CANDLE = {
  id: 10780,
  name: "runed taper candle",
  type: "Weapon (1-handed wand)",
  effect: "+25% Items, +50 Hot Spell Dmg",
};
export const EQUIP_NOVELTY_SPARKLING_CANDLE = {
  id: 10781,
  name: "novelty sparkling candle",
  type: "Ranged weapon (1-handed sparkcandle)",
  effect: "+25% Items, +25 Hot Dmg, +25 Hot Spell Dmg",
};
export const EQUIP_ABRACANDALABRA = {
  id: 10782,
  name: "Abracandalabra",
  type: "Off-hand item",
  effect: "Spell Dmg +100%, MP Regen 5-10, MP +100%",
};
export const EQUIP_EXTRA_WIDE_HEAD_CANDLE = {
  id: 10783,
  name: "extra-wide head candle",
  type: "Hat",
  effect: "Wpn Dmg +100%, HP Regen 10-20, HP +100%",
};

export const PREMIUM_SCENT_OF_A_HUMAN = {
  id: 10774,
  name: "Scent of a Human™ candle",
  type: "Potion (40 adv)",
  effect: "Add 2 copies of Dude monsters",
};
export const PREMIUM_THE_BEAST_WITHIN = {
  id: 10775,
  name: "The Beast Within™ candle",
  type: "Potion (40 adv)",
  effect: "Add 2 copies of Beast monsters",
};
export const PREMIUM_SALSA_CALIENTE = {
  id: 10776,
  name: "Salsa Caliente™ candle",
  type: "Potion (40 adv)",
  effect: "+30% Items",
};
export const PREMIUM_SMOLDERING_CLOVER = {
  id: 10777,
  name: "Smoldering Clover™ candle",
  type: "Potion (40 adv)",
  effect: "+60% Meat Drops",
};
export const PREMIUM_NAPALM_IN_THE_MORNING = {
  id: 10778,
  name: "Napalm In The Morning™ candle",
  type: "Potion (40 adv)",
  effect: "+10 Stats per Fight",
};

export const BASIC_NATURAL_MAGICK_CANDLE = {
  id: 10784,
  name: "natural magick candle",
  type: "Potion (80 adv)",
  effect: "Skill MP Cost -3",
};
export const BASIC_RAINBOW_GLITTER_CANDLE = {
  id: 10785,
  name: "rainbow glitter candle",
  type: "Potion (80 adv)",
  effect: "So-So Resistance to All Elements",
};
export const BASIC_BANANA_CANDLE = {
  id: 10786,
  name: "banana candle",
  type: "Potion (80 adv)",
  effect: "Causes monster attacks to miss often",
};
export const BASIC_EAR_CANDLE = {
  id: 10787,
  name: "ear candle",
  type: "Potion (80 adv)",
  effect: "+100% Combat Initiative",
};
export const BASIC_VOTIVE_OF_CONFIDENCE = {
  id: 10788,
  name: "votive of confidence",
  type: "Potion (80 adv)",
  effect: "Muscle/Mysticality/Moxie +50%",
};

/**
 * @param {number} kolClassId
 * @param {number} kolPathId
 * @param {number} daycount
 * @return {number} Seed value
 */
export function computeSeed(kolClassId, kolPathId, daycount) {
  // Formula spaded by ASawyer
  return kolClassId * 19 + kolPathId * 3 + daycount;
}
