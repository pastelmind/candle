import { CandleInfo } from "./CandleInfo.js";
import { CANDLE_SEEDS, computeSeed } from "./candles.js";
import { KOL_CLASSES } from "./kol-class.js";
import { getValidClassesForPath, KOL_PATHS } from "./kol-path.js";

// @ts-ignore Allow using Vue as UMD module
const App = Vue.extend({
  components: { CandleInfo },
  data() {
    return {
      kolPaths: KOL_PATHS,
      selectedKolClass: KOL_CLASSES[0].id,
      selectedKolPath: KOL_PATHS[0].id,
    };
  },
  computed: {
    candlesByDate() {
      const candles = [];
      for (let day = 1; day <= 30; ++day) {
        const seed = computeSeed(
          this.selectedKolClass,
          this.selectedKolPath,
          day
        );
        candles.push({ day, seed, ...CANDLE_SEEDS.get(seed) });
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
