/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    testEnvironment: "jest-environment-jsdom",
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts(x)"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1"
    }
};
