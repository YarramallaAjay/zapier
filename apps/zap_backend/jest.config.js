/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  testMatch: [
    "**/integrator/tests/**/*.test.ts", // Include tests in ./integrator/tests
    "**/?(*.)+(spec|test).[tj]s?(x)",  // Default test patterns
  ],
};