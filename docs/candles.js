const EQUIP_EXTRA_WIDE_HEAD_CANDLE = "extra-wide head candle";
const EQUIP_ABRACANDALABRA = "Abracandalabra";
const EQUIP_NOVELTY_SPARKLING_CANDLE = "novelty sparkling candle";
const EQUIP_EXTRA_LARGE_UTILITY_CANDLE = "extra-large utility candle";
const EQUIP_RUNED_TAPER_CANDLE = "runed taper candle";

const PREMIUM_SALSA_CALIENTE = "Salsa Caliente™ candle";
const PREMIUM_NAPALM_IN_THE_MORNING = "Napalm In The Morning™ candle";
const PREMIUM_SCENT_OF_A_HUMAN = "Scent of a Human™ Candle";
const PREMIUM_SMOLDERING_CLOVER = "Smoldering Clover™ Candle";
const PREMIUM_THE_BEAST_WITHIN = "The Beast Within™ Candle";

const BASIC_RAINBOW_GLITTER_CANDLE = "rainbow glitter candle";
const BASIC_EAR_CANDLE = "ear candle";
const BASIC_BANANA_CANDLE = "banana candle";
const BASIC_NATURAL_MAGICK_CANDLE = "natural magick candle";
const BASIC_VOTIVE_OF_CONFIDENCE = "votive of confidence";

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
 * @property {string} equipment
 * @property {string} premium
 * @property {string} basic1
 * @property {string} basic2
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
  // TODO: Find out which is correct
  // [203, { equipment: EQUIP_RUNED_TAPER_CANDLE, premium: PREMIUM_NAPALM_IN_THE_MORNING, basic1: BASIC_RAINBOW_GLITTER_CANDLE, basic2: BASIC_VOTIVE_OF_CONFIDENCE }],
  // [203, { equipment: EQUIP_RUNED_TAPER_CANDLE, premium: PREMIUM_SMOLDERING_CLOVER, basic1: BASIC_BANANA_CANDLE, basic2: BASIC_NATURAL_MAGICK_CANDLE }],
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
