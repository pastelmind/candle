import { defineComponent } from "../vue.js";
import { CandleInfo } from "./CandleInfo.js";

/**
 * @template T
 * @typedef {import("../vue.js").PropType<T>} PropType<T>
 */

/** @typedef {import("../data.js").CandlePackage} CandlePackage */

/**
 * @typedef {object} CandleRow
 * @property {number} day Daycount for the seed
 * @property {CandlePackage=} candles
 * @property {number} seed Seed value for the given row
 */

export const TableCandle = defineComponent({
  components: { CandleInfo },

  props: {
    rows: {
      required: true,
      type: /** @type {PropType<CandleRow[]>} */ (Array),
    },
  },

  template: "#table-candle-template",
});
