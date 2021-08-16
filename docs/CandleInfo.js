/** @typedef {import("./candles.js").CandleData} CandleData */

// @ts-ignore Allow using Vue as UMD module
export const CandleInfo = Vue.extend({
  props: {
    candle: {
      type: /** @type {Vue.PropType<CandleData>} */ (Object),
    },
  },
  computed: {
    effectShortHtml() {
      if (!this.candle) return "";
      return /** @type {CandleData} */ (this.candle).effect.replace(
        /Hot(?: Spell)? Dmg/gi,
        (match) => `<span class="element-hot">${match}</span>`
      );
    },
  },
  template: "#candle-info-template",
});
