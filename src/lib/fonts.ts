const fontsJapanese = [
  //
  "Klee One",
  "RocknRoll One",
  "DotGothic16",
  "Rampart One",
  "Reggae One",
  "Stick",
  //
  "Zen Old Mincho",
  "Kaisei Decol",
  "Hachi Maru Pop",
  "Kiwi Maru",
  "Yuji Mai",
  "Yusei Magic",
  "Kaisei Tokumin",
  "Hina Mincho"
];

const fontsAscii = [
  //
  "Pacifico",
  "Big Shoulders",
  "Oswald",
  "Tektur",
  "Playfair Display",
  "Babas Neue",
  "Jaini",
  "Dancing Script",
  "Barriecito"
];

export function getRandomFontFamilyFor(c: string): `font-family:"${string}"` {
  const charCode = c.charCodeAt(0);
  const fontSet = [...fontsJapanese, ...(charCode >= 32 && charCode <= 126 ? fontsAscii : [])];
  return `font-family:"${fontSet[Math.trunc(Math.random() * fontSet.length)]}"`;
}

export function getFontImportStyle(): `<style>${string}</style>` {
  const fontSet = [...fontsJapanese, ...fontsAscii].sort();
  return `<style>@import url("https://fonts.googleapis.com/css2?${fontSet
    .map(fontName => `family=${fontName.replaceAll(" ", "+")}`)
    .join("&")}&display=swap")</style>`;
}
