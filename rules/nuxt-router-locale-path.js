/*
 * Only allow a localePath result as first parameter of router.push and router.replace in vue
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "disallow use of router.push or router.replace without localePath as first parameter",
      category: "Possible Errors",
    },
    fixable: "code",
    schema: [], // no options
  },
  create(context) {
    return {
      "CallExpression[callee.object.name='router'][callee.property.name=/push|replace/]"(
        node
      ) {
        const [firstArgument] = node.arguments;
        if (firstArgument.type !== "CallExpression") {
          context.report({
            node,
            message:
              "First argument of router.push or router.replace must be a localePath result",
          });
        }
      },
    };
  },
};
