import { computeSeed } from "../candles.js";
import { loadCandleSeedData } from "../data.js";
import { KOL_CLASSES } from "../kol-class.js";
import { getValidClassesForPath, KOL_PATHS } from "../kol-path.js";
import { CandleInfo } from "./CandleInfo.js";

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

// @ts-ignore Allow using Vue as UMD module
const App = Vue.extend({
  components: { CandleInfo },
  data() {
    return {
      candleSeedData: undefined,
      kolPathGroups: KOL_PATH_GROUPS,
      selectedKolClass: KOL_CLASSES[0].id,
      selectedKolPath: KOL_PATHS[0].id,
    };
  },
  computed: {
    candlesByDate() {
      if (!this.candleSeedData) return [];

      const candles = [];
      for (let day = 1; day <= 30; ++day) {
        const seed = computeSeed(
          this.selectedKolClass,
          this.selectedKolPath,
          day
        );
        candles.push({ day, seed, ...this.candleSeedData[seed] });
      }

      return candles;
    },

    kolClasses() {
      const validClassesForPath = getValidClassesForPath(this.selectedKolPath);
      return KOL_CLASSES.filter((kolClassInfo) =>
        validClassesForPath.includes(kolClassInfo.id)
      );
    },
  },
  async created() {
    try {
      this.candleSeedData = await loadCandleSeedData();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    /**
     * @param {string} kolClass
     */
    handleKolClassChange(kolClass) {
      this.updateKolClassAndPath({ kolClass: Number(kolClass) });
    },

    /**
     * @param {string} kolPath
     */
    handleKolPathChange(kolPath) {
      this.updateKolClassAndPath({ kolPath: Number(kolPath) });
    },

    /**
     * @param {object} opts
     * @param {number=} opts.kolClass
     * @param {number=} opts.kolPath
     */
    updateKolClassAndPath(opts) {
      this.selectedKolPath = opts.kolPath ?? this.selectedKolPath;

      // Ensure that only classes available in the new path are selected
      const nextKolClass = opts.kolClass ?? this.selectedKolClass;
      const validClassesForPath = getValidClassesForPath(this.selectedKolPath);
      this.selectedKolClass = validClassesForPath.includes(nextKolClass)
        ? nextKolClass
        : validClassesForPath[0];
    },
  },
  template: "#app-template",
});

new App().$mount("#app");
