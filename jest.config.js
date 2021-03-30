function makeModuleNameMapper(srcPath, tsconfigPath) {
  // Get paths from tsconfig
  const {paths} = require(tsconfigPath).compilerOptions;

  console.log(123123)

  const aliases = {};

  // Iterate over paths and convert them into moduleNameMapper format
  Object.keys(paths).forEach((item) => {
    const key = item.replace('/*', '/(.*)');
    const path = paths[item][0].replace('/*', '/$1');
    aliases[key] = srcPath + '/' + path;
  });
  return aliases;
}

const TS_CONFIG_PATH = './tsconfig.json';
const SRC_PATH = '<rootDir>';

module.exports = {
  "transform": {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        "preprocess": true
      }
    ],
    "^.+\\.ts$": "ts-jest"
  },
  "moduleFileExtensions": [
    "js",
    "ts",
    "svelte"
  ],
  "setupFilesAfterEnv": [
    "@testing-library/jest-dom/extend-expect"
  ],

  'roots': [
    SRC_PATH
  ],
  'moduleNameMapper': makeModuleNameMapper(SRC_PATH, TS_CONFIG_PATH)
};
