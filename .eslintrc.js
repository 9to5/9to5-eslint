"use strict";

module.exports = [
  {
    parser: "vue-eslint-parser",
    root: true,
    extends: [
      "eslint:recommended",
      "plugin:eslint-plugin/recommended",
      "plugin:node/recommended",
    ],
    env: {
      node: true,
    },
    overrides: [
      {
        files: ["tests/**/*.js"],
        env: { mocha: true },
      },
    ],
  },
];
