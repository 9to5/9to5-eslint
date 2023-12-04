/*
 * Tell the user not to use NuxtLink, but NuxtLinkLocale instead
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow use of NuxtLink, suggest NuxtLinkLocale instead",
      category: "Possible Errors",
    },
    fixable: "code",
    schema: [], // no options
  },
  create(context) {
    return {
      'VElement[name="NuxtLink"]'(node) {
        context.report({
          node,
          message: "Use NuxtLinkLocale instead of NuxtLink",
          fix(fixer) {
            return fixer.replaceText(
              node,
              node.raw.replace("NuxtLink", "NuxtLinkLocale")
            );
          },
        });
      },
    };
  },
};
