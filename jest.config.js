module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/dist/"],
  moduleNameMapper: {
    "^src/(.*)$": "<rootDir>/src/$1",
  },
};
