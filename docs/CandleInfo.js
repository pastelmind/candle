/** @typedef {import("./candles.js").CandleData} CandleData */

// @ts-ignore Allow using Vue as UMD module
export const CandleInfo = Vue.extend({
  props: {
    candle: {
      type: /** @type {Vue.PropType<CandleData>} */ (Object),
    },
  },
  computed: {
    effectShortText() {
      if (!this.candle) return "";
      return /** @type {CandleData} */ (this.candle).effect;
    },
  },
  template: "#candle-info-template",
});
