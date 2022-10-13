const StyleDictionary = require("style-dictionary");

const buildPath = "./src/tokens/";

const coreAndSemanticTokens = [
  "fontSize",
  "fontWeight",
  "lineHeight",
  "spacing",
  "borderWidth",
  "radii",
  "colors",
  "elevation",
  "light",
  "dark",
];

const tokenFilter = (cat) => (token) => {
  const { category, type } = token.attributes;

  return ["core", "semantic"].includes(category)
    ? type === cat
    : category === cat;
};

const generatrFilesArr = (tokensCategories, ext, format) => {
  return tokensCategories.map((cat) => {
    return {
      filter: tokenFilter(cat),
      destination: `${buildPath}${cat}.${ext}`,
      options: {
        outputReferences: true,
      },
      format: "custom",
    };
  });
};

StyleDictionary.registerTransform({
  name: "sizes/px",
  type: "value",
  matcher: function (prop) {
    return ["lineHeight", "spacing", "borderWidth", "size"].includes(
      prop.attributes.category
    );
  },
  transformer: function (prop) {
    return parseFloat(prop.original.value) + "px";
  },
});

StyleDictionary.registerTransform({
  name: "font-size/rem",
  type: "value",
  matcher: function (prop) {
    return ["fontSize"].includes(prop.attributes.category);
  },
  transformer: function (prop) {
    return parseFloat(prop.original.value / 16) + "rem";
  },
});

StyleDictionary.registerFormat({
  name: "custom",
  formatter: function ({ dictionary }) {
    return `export default {${dictionary.allTokens.map(
      (token) => `\n\t"${token.name}": "${token.value}"`
    )}\n};`;
  },
});

module.exports = {
  source: [
    "src/data/build/global.json",
    "src/data/build/light.json",
    "src/data/build/dark.json",
  ],

  platforms: {
    css: {
      transforms: [
        "attribute/cti",
        "name/cti/kebab",
        "color/hsl",
        "sizes/px",
        "font-size/rem",
      ],
      buildPath: buildPath,
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },

    js: {
      transformGroup: "js",
      transforms: [
        "attribute/cti",
        "name/ti/camel",
        "color/hsl",
        "sizes/px",
        "font-size/rem",
      ],
      prefix: "",
      buildPath: "",
      files: generatrFilesArr(coreAndSemanticTokens, "ts", "javascript/es6"),
    },
  },
};
