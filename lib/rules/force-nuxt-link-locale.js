/**
 * @fileoverview Disallow usage of NuxtLink inside vue templates, suggest NuxtLinkLocale instead
 * @author Tim de Booij
 */
"use strict";

const {
  defineTemplateBodyVisitor,
  getAttribute,
} = require("eslint-plugin-vue/lib/utils");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "problem", // `problem`, `suggestion`, or `layout`
    docs: {
      description:
        "Disallow usage of NuxtLink inside vue templates, suggest NuxtLinkLocale instead",
      recommended: true,
      url: null, // URL to the documentation page for this rule
    },
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages: {
      useNuxtLinkLocale: "Use NuxtLinkLocale instead of NuxtLink",
    },
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return defineTemplateBodyVisitor(context, {
      VElement(node) {
        if (node.name === "nuxtlink") {
          context.report({
            node,
            messageId: "useNuxtLinkLocale",
            fix(fixer) {
              let replacementText = node.rawName;
              if (node.rawName === "NuxtLink") {
                replacementText = replacementText.replace(
                  "NuxtLink",
                  "NuxtLinkLocale"
                );
              } else if (node.rawName === "nuxt-link") {
                replacementText = replacementText.replace(
                  "nuxt-link",
                  "nuxt-link-locale"
                );
              }

              // Remove localePath if it is in the :to prop
              const toAttribute = getAttribute(node, "to");
              if (toAttribute) {
                const toValue = toAttribute.value.value;
                const match = toValue.match(/localePath\((.*)\)/);
                if (match) {
                  const newToValue = match[1]; // get the content inside the brackets
                  toAttribute.value.value = newToValue;
                }
              }

              // Get all attributes and convert them to string
              const attributes = node.startTag.attributes
                .map((attr) => `${attr.key.rawName}="${attr.value.value}"`)
                .join(" ");

              // Replace opening tag
              const openingTagRange = [
                node.startTag.range[0],
                node.startTag.range[1],
              ];
              const closingTagRange = [
                node.endTag.range[0],
                node.endTag.range[1],
              ];

              return [
                fixer.replaceTextRange(
                  openingTagRange,
                  `<${replacementText} ${attributes}>`
                ),
                fixer.replaceTextRange(
                  closingTagRange,
                  `</${replacementText}>`
                ),
              ];
            },
          });
        }
      },
    });
  },
};
