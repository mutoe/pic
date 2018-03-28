const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/server/$1',
  },
  verbose: true,
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
    '<rootDir>/test/unit',
  ],
  coverageDirectory: '<rootDir>/test/api/coverage',
  collectCoverageFrom: [
    'server/**/*.js',
  ],
}
