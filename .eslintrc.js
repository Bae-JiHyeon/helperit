module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react/recommended','airbnb-base','plugin:prettier/recommended'],
  plugins: ['react'],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    "no-console": "off"
  },
};
