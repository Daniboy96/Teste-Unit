module.exports = {
    collectCoverage: true,
  
    coverageReporters: ['lcov', 'text-summary'],

    coverageThreshold: {
        global: {
          statements: 75,
          branches: 75,
          functions: 75,
          lines: 75,
        }
      }

  }