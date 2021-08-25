import {
  BASIC_BANANA_CANDLE,
  BASIC_EAR_CANDLE,
  BASIC_NATURAL_MAGICK_CANDLE,
  BASIC_RAINBOW_GLITTER_CANDLE,
  BASIC_VOTIVE_OF_CONFIDENCE,
  EQUIP_ABRACANDALABRA,
  EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
  EQUIP_EXTRA_WIDE_HEAD_CANDLE,
  EQUIP_NOVELTY_SPARKLING_CANDLE,
  EQUIP_RUNED_TAPER_CANDLE,
  PREMIUM_NAPALM_IN_THE_MORNING,
  PREMIUM_SALSA_CALIENTE,
  PREMIUM_SCENT_OF_A_HUMAN,
  PREMIUM_SMOLDERING_CLOVER,
  PREMIUM_THE_BEAST_WITHIN,
} from "./candles.js";

/** @typedef {import("./candles.js").CandleData} CandleData */

// The following values must be ordered in the same order used in the
// "Item Effects" sheet of the candle spading sheet!

/** @type {ReadonlyMap<number, CandleData>} */
const EQUIPMENT_NUMBER_MAP = new Map(
  [
    EQUIP_EXTRA_WIDE_HEAD_CANDLE,
    EQUIP_ABRACANDALABRA,
    EQUIP_NOVELTY_SPARKLING_CANDLE,
    EQUIP_EXTRA_LARGE_UTILITY_CANDLE,
    EQUIP_RUNED_TAPER_CANDLE,
  ].map((candleData, index) => [index + 1, candleData])
);

/** @type {ReadonlyMap<number, CandleData>} */
const PREMIUM_NUMBER_MAP = new Map(
  [
    PREMIUM_SALSA_CALIENTE,
    PREMIUM_NAPALM_IN_THE_MORNING,
    PREMIUM_SCENT_OF_A_HUMAN,
    PREMIUM_SMOLDERING_CLOVER,
    PREMIUM_THE_BEAST_WITHIN,
  ].map((candleData, index) => [index + 1, candleData])
);

/** @type {ReadonlyMap<number, CandleData>} */
const BASIC_NUMBER_MAP = new Map(
  [
    BASIC_RAINBOW_GLITTER_CANDLE,
    BASIC_EAR_CANDLE,
    BASIC_BANANA_CANDLE,
    BASIC_NATURAL_MAGICK_CANDLE,
    BASIC_VOTIVE_OF_CONFIDENCE,
  ].map((candleData, index) => [index + 1, candleData])
);

// When changing this URL, also change the preload <link> in index.html!
const DATA_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vReJ-umFgHAztzyOJTQcAnPdiArQ0vNktNNkarh1AxpE3-0wPIoTKUqzCW2JpDD-jFjjkqjZ4PXyszg/pub?gid=742634370&single=true&output=csv";

/** Loads Candle Eudora seed data from the spading sheet */
export async function loadCandleSeedData() {
  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch data: ${response.status} ${response.statusText}`
    );
  }

  const rawCsv = await response.text();
  return parseCsvData(rawCsv);
}

/**
 * @typedef {object} CandlePackage
 * @property {CandleData} equipment
 * @property {CandleData} premium
 * @property {CandleData} basic1
 * @property {CandleData} basic2
 */

/**
 * @param {string} rawCsv
 */
function parseCsvData(rawCsv) {
  // Ignore header text
  // Note: This should be trivial with a dedicated CSV parsing library...
  const headerMatch = rawCsv.match(/seed,equipment,premium,basic1,basic2/i);
  if (!headerMatch) {
    throw new Error("Failed to locate the header row in the CSV file");
  }
  if (headerMatch.index === undefined) {
    throw new Error("Header row found, but regex 'index' is undefined");
  }

  const csvBodyStartIndex = headerMatch.index + headerMatch[0].length;
  const csvBody = rawCsv.slice(csvBodyStartIndex).trim();

  /** @type {Record<number, CandlePackage>} */
  const candleData = {};

  for (const line of csvBody.split(/\n+/)) {
    let seed, candlePackage;
    try {
      [seed, candlePackage] = parseCsvLine(line);
    } catch (error) {
      // Log and skip invalid lines
      console.warn("The CSV file contains a malformed line.\n%o", error);
      continue;
    }

    if (candleData[seed]) {
      throw new Error(`Duplicate entry for seed ${seed}: line "${line}"`);
    }
    candleData[seed] = candlePackage;
  }

  return candleData;
}

/**
 * @param {string} line
 * @return {[seed, CandlePackage]}
 */
function parseCsvLine(line) {
  const cells = line.split(",");
  if (cells.length !== 5) {
    throw new Error(`Incorrect number of cells in row: "${line}"`);
  }

  const seed = Number(cells[0]);
  const equipmentNum = Number(cells[1]);
  const premiumNum = Number(cells[2]);
  const basic1Num = Number(cells[3]);
  const basic2Num = Number(cells[4]);

  assertIsInteger(seed, "seed", line);
  assertIsInteger(equipmentNum, "equipment", line);
  assertIsInteger(premiumNum, "premium", line);
  assertIsInteger(basic1Num, "basic1", line);
  assertIsInteger(basic2Num, "basic2", line);

  const equipment = EQUIPMENT_NUMBER_MAP.get(equipmentNum);
  const premium = PREMIUM_NUMBER_MAP.get(premiumNum);
  const basic1 = BASIC_NUMBER_MAP.get(basic1Num);
  const basic2 = BASIC_NUMBER_MAP.get(basic2Num);

  assertIsValidItemCode(equipment, "equipment", line);
  assertIsValidItemCode(premium, "premium", line);
  assertIsValidItemCode(basic1, "basic1", line);
  assertIsValidItemCode(basic2, "basic2", line);

  return [seed, { equipment, premium, basic1, basic2 }];
}

/**
 * @param {unknown} value
 * @param {string} type
 * @param {string} line
 */
function assertIsInteger(value, type, line) {
  if (!Number.isInteger(value)) {
    throw new Error(
      `${type} is not an integer (got value ${value} in line "${line}")`
    );
  }
}

/**
 * @param {unknown} value
 * @param {string} type
 * @param {string} line
 * @return {asserts value}
 */
function assertIsValidItemCode(value, type, line) {
  if (!value) {
    throw new Error(
      `${type} is not a valid item code (got value ${value} in line "${line}")`
    );
  }
}
