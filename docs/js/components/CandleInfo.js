import { computed, defineComponent } from "../vue.js";

/**
 * @template T
 * @typedef {import("../vue.js").PropType<T>} PropType<T>
 */

/** @typedef {import("../candles.js").CandleData} CandleData */

// @ts-ignore Allow using Vue as UMD module
export const CandleInfo = defineComponent({
  props: {
    candle: {
      type: /** @type {PropType<CandleData>} */ (Object),
    },
  },

  setup(props) {
    const effectShortHtml = computed(() => {
      if (!props.candle) return "";

      return props.candle.effect
        .replace(/\//g, "&#8203;/&#8203;") // Allow breaking word at slashes
        .replace(
          /Hot(?: Spell)? Dmg/gi,
          (match) => `<span class="element-hot">${match}</span>`
        );
    });

    return { effectShortHtml };
  },

  template: "#candle-info-template",
});
