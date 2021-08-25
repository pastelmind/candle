import { computeSeed } from "../candles.js";
import { loadCandleSeedData } from "../data.js";
import { KOL_CLASSES } from "../kol-class.js";
import { getValidClassesForPath, KOL_PATHS } from "../kol-path.js";
import { computed, createApp, defineComponent, ref } from "../vue.js";
import { TableCandle } from "./TableCandle.js";

/** @typedef {import("../data.js").CandlePackage} CandlePackage */
/** @typedef {import("./TableCandle.js").CandleRow} CandleRow */
/** @typedef {Record<number, Readonly<CandlePackage>>} CandleSeedData */
/** @typedef {import("../kol-path.js").KolPathInfo} KolPathInfo */

const KOL_PATH_GROUPS = KOL_PATHS.reduce((grouped, kolPathInfo) => {
  const groupKey = kolPathInfo.year ?? "default";
  if (grouped[groupKey]) {
    grouped[groupKey].push(kolPathInfo);
  } else {
    grouped[groupKey] = [kolPathInfo];
  }
  return grouped;
}, /** @type {Record<number | 'default', KolPathInfo[]>} */ ({}));

const App = defineComponent({
  components: { TableCandle },

  setup() {
    const selectedKolClass = ref(KOL_CLASSES[0].id);
    const selectedKolPath = ref(KOL_PATHS[0].id);

    const kolClasses = computed(() => {
      const validClassesForPath = getValidClassesForPath(selectedKolPath.value);
      return KOL_CLASSES.filter((kolClassInfo) =>
        validClassesForPath.includes(kolClassInfo.id)
      );
    });
    const kolPathGroups = ref(KOL_PATH_GROUPS);

    /**
     * @param {object} opts
     * @param {number=} opts.kolClass
     * @param {number=} opts.kolPath
     */
    const updateKolClassAndPath = (opts) => {
      if (opts.kolPath !== undefined) {
        selectedKolPath.value = opts.kolPath;
      }

      // Ensure that only classes available in the new path are selected
      const nextKolClass = opts.kolClass ?? selectedKolClass.value;
      const validClassesForPath = getValidClassesForPath(selectedKolPath.value);
      selectedKolClass.value = validClassesForPath.includes(nextKolClass)
        ? nextKolClass
        : validClassesForPath[0];
    };

    /**
     * @param {string} kolClass
     */
    const handleKolClassChange = (kolClass) =>
      updateKolClassAndPath({ kolClass: Number(kolClass) });

    /**
     * @param {string} kolPath
     */
    const handleKolPathChange = (kolPath) =>
      updateKolClassAndPath({ kolPath: Number(kolPath) });

    const candleSeedData = ref(
      /** @type {CandleSeedData | undefined} */ (undefined)
    );
    (async () => {
      try {
        candleSeedData.value = await loadCandleSeedData();
      } catch (error) {
        console.error(error);
      }
    })();

    const candleRows = computed(() => {
      if (!candleSeedData.value) return [];

      /** @type {CandleRow[]} */
      const candleRows = [];
      for (let day = 1; day <= 30; ++day) {
        const seed = computeSeed(
          selectedKolClass.value,
          selectedKolPath.value,
          day
        );
        candleRows.push({ day, seed, candles: candleSeedData.value[seed] });
      }

      return candleRows;
    });

    return {
      candleRows,
      handleKolClassChange,
      handleKolPathChange,
      kolClasses,
      kolPathGroups,
      selectedKolClass,
      selectedKolPath,
    };
  },

  template: "#app-template",
});

createApp(App).mount("#app");
