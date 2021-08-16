/**
 * @typedef {object} CandleData
 * @property {string} name
 * @property {string} type
 * @property {string} effect
 */

const EQUIP_EXTRA_WIDE_HEAD_CANDLE = {
  name: "extra-wide head candle",
  type: "Off-hand item",
  effect: "Spell Dmg +100%, MP Regen 5-10, MP +100%",
};

const EQUIP_ABRACANDALABRA = {
  name: "Abracandalabra",
  type: "Weapon (1-handed club)",
  effect: "+25% Items, +50 Hot Dmg",
};
const EQUIP_NOVELTY_SPARKLING_CANDLE = {
  name: "novelty sparkling candle",
  type: "Hat",
  effect: "Wpn Dmg +100%, HP Regen 10-20, HP +100%",
};
const EQUIP_EXTRA_LARGE_UTILITY_CANDLE = {
  name: "extra-large utility candle",
  type: "Ranged weapon (1-handed sparkcandle)",
  effect: "+25% Items, +25 Hot Dmg, +25 Hot Spell Dmg",
};
const EQUIP_RUNED_TAPER_CANDLE = {
  name: "runed taper candle",
  type: "Weapon (1-handed wand)",
  effect: "+25% Items, +50 Hot Spell Dmg",
};

const PREMIUM_SALSA_CALIENTE = {
  name: "Salsa Caliente™ candle",
  type: "Potion (40 adv)",
  effect: "+30% Items",
};
const PREMIUM_NAPALM_IN_THE_MORNING = {
  name: "Napalm In The Morning™ candle",
  type: "Potion (40 adv)",
  effect: "+10 Stats per Fight",
};
const PREMIUM_SCENT_OF_A_HUMAN = {
  name: "Scent of a Human™ candle",
  type: "Potion (40 adv)",
  effect: "Add 2 copies of Dude monsters",
};
const PREMIUM_SMOLDERING_CLOVER = {
  name: "Smoldering Clover™ candle",
  type: "Potion (40 adv)",
  effect: "+60% Meat Drops",
};
const PREMIUM_THE_BEAST_WITHIN = {
  name: "The Beast Within™ candle",
  type: "Potion (40 adv)",
  effect: "Add 2 copies of Beast monsters",
};

const BASIC_RAINBOW_GLITTER_CANDLE = {
  name: "rainbow glitter candle",
  type: "Potion (80 adv)",
  effect: "So-So Resistance to All Elements",
};
const BASIC_EAR_CANDLE = {
  name: "ear candle",
  type: "Potion (80 adv)",
  effect: "+100% Combat Initiative",
};
const BASIC_BANANA_CANDLE = {
  name: "banana candle",
  type: "Potion (80 adv)",
  effect: "Causes monster attacks to miss often",
};
const BASIC_NATURAL_MAGICK_CANDLE = {
  name: "natural magick candle",
  type: "Potion (80 adv)",
  effect: "Skill MP Cost -3",
};
const BASIC_VOTIVE_OF_CONFIDENCE = {
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

/**
 * @typedef {object} CandlePackage
 * @property {CandleData} equipment
 * @property {CandleData} premium
 * @property {CandleData} basic1
 * @property {CandleData} basic2
 */

/** @type {ReadonlyMap<number, CandlePackage>} */
export const CANDLE_SEEDS = new Map([
  [
    21,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    32,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    33,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    34,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    35,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    36,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    37,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    38,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    40,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    42,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    43,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    44,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    45,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    46,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    47,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    48,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    49,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    57,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    66,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    82,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    95,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    97,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    103,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    108,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    109,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    110,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    111,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    114,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    116,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    117,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    119,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    120,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    121,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    133,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    134,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    136,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    137,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    138,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    139,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    140,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    141,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    142,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    143,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    144,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    146,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    147,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    148,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    149,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    152,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    153,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    162,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    163,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    165,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    166,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    167,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    171,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    178,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    179,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    180,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    185,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    186,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    187,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    188,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_VOTIVE_OF_CONFIDENCE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    190,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    203,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    204,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_BANANA_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    205,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    206,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_NATURAL_MAGICK_CANDLE,
    },
  ],
  [
    207,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    241,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SCENT_OF_A_HUMAN,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    242,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    243,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_EAR_CANDLE,
      basic2: BASIC_VOTIVE_OF_CONFIDENCE,
    },
  ],
  [
    244,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    525,
    {
      equipment: EQUIP_ABRACANDALABRA,
      premium: PREMIUM_THE_BEAST_WITHIN,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    526,
    {
      equipment: EQUIP_NOVELTY_SPARKLING_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_NATURAL_MAGICK_CANDLE,
      basic2: BASIC_RAINBOW_GLITTER_CANDLE,
    },
  ],
  [
    527,
    {
      equipment: EQUIP_RUNED_TAPER_CANDLE,
      premium: PREMIUM_SALSA_CALIENTE,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
  [
    562,
    {
      equipment: EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
      premium: PREMIUM_NAPALM_IN_THE_MORNING,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_EAR_CANDLE,
    },
  ],
  [
    563,
    {
      equipment: EQUIP_EXTRA_WIDE_HEAD_CANDLE,
      premium: PREMIUM_SMOLDERING_CLOVER,
      basic1: BASIC_RAINBOW_GLITTER_CANDLE,
      basic2: BASIC_BANANA_CANDLE,
    },
  ],
]);
