const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  verbose: true,
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverageFrom: [
    'app/**/*.js',
    'index.js',
    '!**/node_modules/**',
  ],
}
