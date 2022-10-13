const StyleDictionary = require("style-dictionary");

const buildPath = "./src/tokens/";

const coreAndSemanticTokens = [
  "fontSize",
  "fontWeight",
  "lineHeight",
  "spacing",
  "borderWidth",
  "radii",
];

const tokenFilter = (cat) => (token) => {
  const { category, type } = token.attributes;

  return ["core", "semantic"].includes(category)
    ? type === cat
    : category === cat;
};

const generatrFilesArr = (tokensCategories, ext, format) => {
  // console.log(tokensCategories);
  return tokensCategories.map((cat) => {
    return {
      filter: tokenFilter(cat),
      destination: `${buildPath}${cat}.tokens.${ext}`,
      format,
    };
  });
};

StyleDictionary.registerTransform({
  name: 'myRegisteredTransform',
  type: 'value',
  matcher: (token) => token.attributes.category === 'spacing',
  transformer: (token) => `${parseInt(token.value) / 16}rem`,
});

StyleDictionary.registerTransform({
  name: "sizes/px",
  type: "value",
  matcher: function (prop) {
    return [
      "lineHeight",
      "spacing",
      "borderWidth",
      "size",
    ].includes(prop.attributes.category);
  },
  transformer: function (prop) {
    return parseFloat(prop.original.value) + "px";
  },
});

StyleDictionary.registerTransform({
  name: "font-size/rem",
  type: "value",
  matcher: function (prop) {
    return [
      "fontSize",
    ].includes(prop.attributes.category);
  },
  transformer: function (prop) {
    return parseFloat(prop.original.value / 16)  + "rem";
  },
});

module.exports = {
  source: ["src/data/build/global.json"],

  platforms: {
    // web: {
    //   transforms: ["attribute/cti", "name/cti/camel", "color/hsl", "size/px"],
    //   buildPath: buildPath,
    //   files:  generatrFilesArr(coreAndSemanticTokens, "ts", "javascript/es6"),
    // },
    css: {
      // This works, we can create new transform arrays on the fly and edit built-ins
      transforms: ["attribute/cti", "name/cti/kebab", "color/hsl", "sizes/px", "font-size/rem"],
      buildPath: buildPath,
      files: [
        {
          destination: "variables.css",
          format: "css/variables",
        },
      ],
    },

    js: {
      transformGroup: "js",
      transforms: ["attribute/cti", "name/cti/camel", "color/hsl", "sizes/px", "font-size/rem"],
      prefix: "",
      buildPath: "",
      files: generatrFilesArr(coreAndSemanticTokens, "ts", "javascript/es6"),
    },
  },
};

// const StyleDictionaryPackage = require("style-dictionary");
// const { createFlatObject } = require("./fns");

// // HAVE THE STYLE DICTIONARY CONFIG DYNAMICALLY GENERATED

// StyleDictionaryPackage.registerFormat({
//   name: "scss/variables",
//   formatter: function (dictionary, config) {
//     return `${this.selector} {\n${dictionary.allProperties
//       .map((prop) => `  --${prop.name}: ${prop.value};`)
//       .join("\n")}\n}`;
//   },
// });

// StyleDictionaryPackage.registerTransform({
//   name: "sizes/rem",
//   type: "value",
//   matcher: function (prop) {
//     // You can be more specific here if you only want 'em' units for font sizes
//     return [
//       "fontSizes",
//       "spacing",
//       "borderRadius",
//       "borderWidth",
//       "sizing",
//     ].includes(prop.attributes.category);
//   },
//   transformer: function (prop) {
//     // You can also modify the value here if you want to convert pixels to ems
//     return parseFloat(prop.original.value) + "px";
//   },
// });

// function getStyleDictionaryConfig(theme) {
//   return {
//     source: [`src/data/build/${theme}.json`],
//     format: {
//       createFlatObject,
//     },
//     platforms: {
//       web: {
//         transforms: ["attribute/cti", "name/cti/kebab", "sizes/rem"],
//         buildPath: `${buildPath}`,
//         files: [
//           {
//             destination: `${theme}.json`,
//             format: "createFlatObject",
//           },
//           {
//             destination: `${theme}.css`,
//             format: "css/variables",
//             selector: `.${theme}-theme`,
//           },
//         ],
//       },
//     },
//   };
// }

// console.log("Build started...");

// // PROCESS THE DESIGN TOKENS FOR THE DIFFEREN BRANDS AND PLATFORMS

// ["global", "dark", "light"].map(function (theme) {
//   console.log("\n==============================================");
//   console.log(`\nProcessing: [${theme}]`);

//   const StyleDictionary = StyleDictionaryPackage.extend(
//     getStyleDictionaryConfig(theme)
//   );

//   StyleDictionary.buildPlatform("web");

//   console.log("\nEnd processing");
// });

// console.log("\n==============================================");
// console.log("\nBuild completed!");
