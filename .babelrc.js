
const { MODULE_TYPE } = process.env;

const babelEnvModules = { modules: MODULE_TYPE === "es" ? false : MODULE_TYPE };

module.exports = {
  presets: [
    [
      "@babel/env",
      {
        ...babelEnvModules,
        targets: [
          "> 1%",
          "last 4 versions",
          "Firefox ESR",
          "not ie < 9"
        ]
      }
    ],
    "@babel/typescript"
  ]
}