module.exports = {
  rootDir: './',
  coverageReporters: ['json', 'lcov', 'text-summary'],
  collectCoverageFrom: ['src/**/*.js'],
  globalSetup: '<rootDir>/test/setup-global.js',
  roots: ['src', 'test'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test/integration/'
  ]
};
