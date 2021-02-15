module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/packages/**/src/**/*.(ts|tsx)',
        '!<rootDir>/packages/**/src/**/*.stories.(ts|tsx|mdx)',
        '!<rootDir>/packages/**/src/**/*.test.(ts|tsx)',
        '!<rootDir>/packages/theme/**/*',
        '!<rootDir>/packages/utils/**/*',
        '!<rootDir>/packages/core/**/docs/**/*',
        '!<rootDir>/packages/core/**/CssBaseline/**/*',
        '!<rootDir>/packages/loaders/**/*',
        '!<rootDir>/packages/icons/**/*',
        '!<rootDir>/packages/**/index.(ts|tsx)',
        '!<rootDir>/packages/**/types.(ts|tsx)'
    ],
    coverageDirectory: '<rootDir>/coverage/',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    testEnvironment: 'jsdom',
    rootDir: './',
    projects: [
        {
            displayName: 'core',
            setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
            moduleNameMapper: {
                '^@test-utils': '<rootDir>/packages/utils/src/test-utils'
            },
            testMatch: ['<rootDir>/packages/core/src/**/*.(spec|test).(ts|tsx)']
        },
        {
            displayName: 'layout',
            setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
            moduleNameMapper: {
                '^@test-utils': '<rootDir>/packages/utils/src/test-utils'
            },
            testMatch: ['<rootDir>/packages/layout/src/**/*.(spec|test).(ts|tsx)']
        },
        {
            displayName: 'icons',
            setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
            moduleNameMapper: {
                '^@test-utils': '<rootDir>/packages/utils/src/test-utils'
            },
            testMatch: ['<rootDir>/packages/icons/src/icons/**/*.(spec|test).(ts|tsx)']
        },
        {
            displayName: 'forms',
            setupFilesAfterEnv: ['<rootDir>/jest.setupAfterEnv.js'],
            moduleNameMapper: {
                '^@test-utils': '<rootDir>/packages/utils/src/test-utils'
            },
            testMatch: ['<rootDir>/packages/forms/src/**/*.(spec|test).(ts|tsx)']
        }
    ]
};
