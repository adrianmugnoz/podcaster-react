const fs = require('fs');
const path = require('path');
const resolve = require('resolve');

process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts?(x)'],
  testEnvironment: resolve.sync('jest-environment-jsdom', {
    basedir: require.resolve('jest'),
  }),
  testPathIgnorePatterns: ['/node_modules/'],
  setupFilesAfterEnv: fs.existsSync('src/setupTests.ts') ? ['<rootDir>/src/setupTests.ts'] : [],
  moduleDirectories: ['node_modules', path.join(__dirname, './src')],
  transform: {
    '\\.css\\.ts$': '@vanilla-extract/jest-transform',
  },
  resetMocks: true,
  collectCoverageFrom: [
    'src/**/*.ts?(x)',
    '!<rootDir>/node_modules/**/*',
    '!<rootDir>/src/test/**/*',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/**/*.css.ts',
    '!<rootDir>/src/setupTests*',
    '!<rootDir>/src/index*',
  ],
  preset: 'ts-jest',
  collectCoverage: true,
};
