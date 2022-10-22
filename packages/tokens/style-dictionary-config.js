// eslint-disable-next-line no-undef, @typescript-eslint/no-var-requires
const StyleDictionary = require('style-dictionary');

const buildPath = './src/tokens/';

const coreTokens = [
  'fontSize',
  'fontFamilies',
  'fontWeight',
  'lineHeight',
  'spacing',
  'borderWidth',
  'radii',
  'colors',
  'elevation',
  'gradient',
];

const themeTokens = ['light', 'dark'];

const filterTokens = (tokenCategory) => (token) => {
  const { category, type } = token.attributes;

  return ['tokens'].includes(category)
    ? type === tokenCategory
    : category === tokenCategory;
};

const getTokens = (tokensCategories, extension) => {
  return tokensCategories.map((tokenCategory) => {
    return {
      filter: filterTokens(tokenCategory),
      destination: `${buildPath}${tokenCategory}.${extension}`,
      options: {
        outputReferences: true,
      },
      format: 'custom',
    };
  });
};

const getThemeTokens = (tokensCategories, extension) => {
  return tokensCategories.map((tokenCategory) => {
    return {
      filter: filterTokens(tokenCategory),
      destination: `${buildPath}${tokenCategory}.${extension}`,
      options: {
        outputReferences: true,
      },
      format: 'custom-theme',
    };
  });
};

//TODO - transform font weight to number instead of string

StyleDictionary.registerTransform({
  name: 'sizes/px',
  type: 'value',
  matcher: function (prop) {
    return ['lineHeight', 'spacing', 'borderWidth', 'size'].includes(
      prop.attributes.category
    );
  },
  transformer: function (prop) {
    return parseFloat(prop.original.value) + 'px';
  },
});

StyleDictionary.registerTransform({
  name: 'font-size/rem',
  type: 'value',
  matcher: function (prop) {
    return ['fontSize', 'lineHeight', 'borderWidth'].includes(
      prop.attributes.category
    );
  },
  transformer: function (prop) {
    return parseFloat(prop.original.value / 16) + 'rem';
  },
});

StyleDictionary.registerFormat({
  name: 'custom',
  formatter: function ({ dictionary }) {
    return `export const ${Object.keys(
      dictionary.tokens
    )} = {${dictionary.allTokens.map(
      (token) => `\n\t"${token.name}": "${token.value}"`
    )}\n};`;
  },
});

StyleDictionary.registerFormat({
  name: 'custom-theme',
  formatter: function ({ dictionary }) {
    return `export const ${Object.keys(
      dictionary.tokens
    )} = {${dictionary.allTokens.map(
      (token) =>
        `\n\t"${token.name.replace(token.attributes.category + '-', '')}": "${
          token.value
        }"`
      // `\n\t"${token.name}": "${token.value}"`
    )}\n};`;
  },
});

module.exports = {
  source: [
    'src/data/build/global.json',
    'src/data/build/light.json',
    'src/data/build/dark.json',
  ],

  platforms: {
    css: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/hsl',
        'sizes/px',
        'font-size/rem',
      ],
      buildPath: buildPath,
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },

    js: {
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/ti/camel',
        'color/hsl',
        'sizes/px',
        'font-size/rem',
      ],
      prefix: '',
      buildPath: '',
      files: getTokens(coreTokens, 'ts', 'javascript/es6'),
    },

    jsThemes: {
      transformGroup: 'js',
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'color/hsl',
        'sizes/px',
        'font-size/rem',
      ],
      prefix: '',
      buildPath: '',
      files: getThemeTokens(themeTokens, 'ts', 'javascript/es6'),
    },
  },
};
