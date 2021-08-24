export const KolClass = Object.freeze({
  SEAL_CLUBBER: 1,
  TURTLE_TAMER: 2,
  PASTAMANCER: 3,
  SAUCEROR: 4,
  DISCO_BANDIT: 5,
  ACCORDION_THIEF: 6,
  AVATAR_OF_BORIS: 11,
  ZOMBIE_MASTER: 12,
  AVATAR_OF_JARLSBERG: 14,
  AVATAR_OF_SNEAKY_PETE: 15,
  ED: 17,
  COW_PUNCHER: 18,
  BEANSLINGER: 19,
  SNAKE_OILER: 20,
  VAMPYRE: 24,
  PLUMBER: 25,
  GELATINOUS_NOOB: 23,
});

/**
 * @typedef {object} KolClassInfo
 * @property {number} id
 * @property {string} name
 */

/** @type {readonly KolClassInfo[]} */
export const KOL_CLASSES = Object.freeze([
  { id: KolClass.SEAL_CLUBBER, name: "Seal Clubber" },
  { id: KolClass.TURTLE_TAMER, name: "Turtle Tamer" },
  { id: KolClass.PASTAMANCER, name: "Pastamancer" },
  { id: KolClass.SAUCEROR, name: "Sauceror" },
  { id: KolClass.DISCO_BANDIT, name: "Disco Bandit" },
  { id: KolClass.ACCORDION_THIEF, name: "Accordion Thief" },
  { id: KolClass.AVATAR_OF_BORIS, name: "Avatar of Boris" },
  { id: KolClass.AVATAR_OF_JARLSBERG, name: "Avatar of Jarlsberg" },
  { id: KolClass.AVATAR_OF_SNEAKY_PETE, name: "Avatar of Sneaky Pete" },
  { id: KolClass.ED, name: "Actually Ed" },
  { id: KolClass.VAMPYRE, name: "Vampyre" },
  { id: KolClass.ZOMBIE_MASTER, name: "Zombie Master" },
  { id: KolClass.COW_PUNCHER, name: "Cow Puncher" },
  { id: KolClass.BEANSLINGER, name: "Beanslinger" },
  { id: KolClass.SNAKE_OILER, name: "Snake Oiler" },
  { id: KolClass.PLUMBER, name: "Plumber" },
  { id: KolClass.GELATINOUS_NOOB, name: "Gelatinous Noob" },
]);
