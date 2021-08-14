import { CANDLE_SEEDS, computeSeed } from "./candles.js";
import { KolClass, KolPath } from "./data.js";

const kolClasses = Object.entries(KolClass).map(([idStr, kolClassInfo]) => ({
  id: Number(idStr),
  ...kolClassInfo,
}));

const kolPaths = Object.entries(KolPath).map(([idStr, kolPathInfo]) => ({
  id: Number(idStr),
  ...kolPathInfo,
}));

const App = Vue.extend({
  data() {
    return {
      kolClasses,
      kolPaths,
      selectedKolClass: kolClasses[0].id,
      selectedKolPath: kolPaths[0].id,
    };
  },
  computed: {
    candlesByDate() {
      const candles = [];
      for (let day = 1; day <= 10; ++day) {
        const seed = computeSeed(
          this.selectedKolClass,
          this.selectedKolPath,
          day
        );
        candles.push({ day, seed, ...CANDLE_SEEDS.get(seed) });
      }
      return candles;
    },
  },
});

new App().$mount("#app");
