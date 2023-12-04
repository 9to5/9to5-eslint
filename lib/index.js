/**
 * @fileoverview 9to5 eslint rules
 * @author Tim de Booij
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
module.exports = {
  configs: {
    parser: require.resolve("vue-eslint-parser"),
  },
  rules: requireIndex(__dirname + "/rules"),
};
