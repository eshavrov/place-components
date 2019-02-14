module.exports = {
  automock: false,
  collectCoverageFrom: ['<rootDir>/components/**/src/**/*.js'],
  testMatch: ['<rootDir>/components/**/src/**/*.test.js', `<rootDir>/*.storybook/stories/**/*.test.js`],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel7-jest',
    '^.+\\.css$': '<rootDir>/config/cssTransform.js',
  },
  moduleFileExtensions: ['js'],
};
