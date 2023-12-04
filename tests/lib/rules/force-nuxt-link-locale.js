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

const ruleTester = new RuleTester();
ruleTester.run("force-nuxt-link-locale", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "<NuxtLink to=\"/\">Home</NuxtLink>",
      errors: [{ message: "Fill me in.", type: "Me too" }],
    },
  ],
});
