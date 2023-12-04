/**
 * @fileoverview Disallow usage of NuxtLink inside vue templates, suggest NuxtLinkLocale instead
 * @author Tim de Booij
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/force-nuxt-link-locale"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: require.resolve("vue-eslint-parser"),
  parserOptions: { ecmaVersion: 2015 },
});
ruleTester.run("force-nuxt-link-locale", rule, {
  valid: [
    {
      filename: "test.vue",
      code: `<template><NuxtLinkLocale to="/">Home</NuxtLinkLocale></template>`,
    },
  ],

  invalid: [
    {
      filename: "test.vue",
      code: `<template><NuxtLink to="/">Home</NuxtLink></template>`,
      errors: [{ message: "Use NuxtLinkLocale instead of NuxtLink" }],
    },
  ],
});
