const dbv = [
  {
    "7211537468208860458": {
      authorId: "7155995379640157227",
      createTime: 1679066923,
      diggCount: 29600,
      playCount: 391900,
    },
    "7226410217112718618": {
      authorId: "6927676051271566341",
      createTime: 1682529751,
      diggCount: 21800,
      playCount: 467100,
    },
    "7218087842222722309": {
      authorId: "6959506853194826758",
      createTime: 1680592042,
      diggCount: 58400,
      playCount: 1500000,
    },
    "7202623931407289606": {
      authorId: "6569491753572499461",
      createTime: 1676991570,
      diggCount: 44000,
      playCount: 363100,
    },
  },
];

const dba = [
  {
    "7155995379640157227": {
      uniqueIds: "coursera",
      nicknames: "Coursera",
      followerCount: 16300,
      heartCount: 43500,
      videoCount: 192,
    },
    "6927676051271566341": {
      uniqueIds: "brandondior1",
      nicknames: "Brandondior1",
      followerCount: 217500,
      heartCount: 17600000,
      videoCount: 337,
    },
    "6959506853194826758": {
      uniqueIds: "brain.curiosities",
      nicknames: "Brain.curiosities 🧠",
      followerCount: 71900,
      heartCount: 1800000,
      videoCount: 716,
    },
    "6569491753572499461": {
      uniqueIds: "laurentiu_nanciu",
      nicknames: "Laurențiu Nanciu",
      followerCount: 6100,
      heartCount: 95900,
      videoCount: 116,
    },
  },
];

// SCHEMAT WYGLĄDA TAK

// const schema = [
//   {
//     "7202623931407289606": {
//       authorId: "6569491753572499461",
//       createTime: 1676991570,
//       diggCount: 44000,
//       playCount: 363100,
//       uniqueIds: "laurentiu_nanciu",
//       nicknames: "Laurențiu Nanciu",
//       followerCount: 6100,
//       heartCount: 95900,
//       videoCount: 116,
//     },
//   },
// ];

// FUNKCJA DOŁĄCZA ZMIENNE

const newdb = dbv.map((dbvItem) => {
  const combinedItem = {};
  for (const key in dbvItem) {
    if (dbvItem.hasOwnProperty(key)) {
      const authorId = dbvItem[key].authorId;
      if (dba[0][authorId]) {
        combinedItem[key] = {
          ...dbvItem[key],
          ...dba[0][authorId],
        };
      }
    }
  }
  return combinedItem;
});

console.log(newdb);
//   Teraz zmienna newdb zawiera połączone informacje z obu zmiennych, zachowując zależności na podstawie authorId.