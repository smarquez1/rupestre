/* eslint-env node */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        paths: ["."],
        extensions: [".js", ".jsx"],
      },
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["prettier"],
  rules: {
    "import/newline-after-import": "error",
    "import/no-anonymous-default-export": 0,
    "import/no-unresolved": [2],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true,
      },
    ],
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
  },
}
