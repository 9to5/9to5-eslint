# eslint-plugin-9to5

9to5 eslint rules

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-9to5`:

```sh
npm install eslint-plugin-9to5 --save-dev
```

## Usage

Add `9to5` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "9to5"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "9to5/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                           | Description                                                                     | 🔧 |
| :------------------------------------------------------------- | :------------------------------------------------------------------------------ | :- |
| [force-nuxt-link-locale](docs/rules/force-nuxt-link-locale.md) | Disallow usage of NuxtLink inside vue templates, suggest NuxtLinkLocale instead | 🔧 |

<!-- end auto-generated rules list -->


