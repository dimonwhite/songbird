module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "linebreak-style": [
      "error",
      "windows"
    ],
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "react/state-in-constructor": "off"
  },
  settings: {
    "import/resolver": {
      alias: [
        ["@modules", "./src/modules"],
        ["@data", "./src/data"],
        ["@", "./src"]
      ]
    }
  }
};
