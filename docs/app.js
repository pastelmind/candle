import { KolClass, KolPath } from "./data.js";

export const app = new Vue({
  el: "#app",
  data: {
    kolClasses: Object.entries(KolClass).map(([idStr, kolClassInfo]) => ({
      id: Number(idStr),
      ...kolClassInfo,
    })),
    kolPaths: Object.entries(KolPath).map(([idStr, kolPathInfo]) => ({
      id: Number(idStr),
      ...kolPathInfo,
    })),
  },
});
