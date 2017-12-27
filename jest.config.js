'use strict';
module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'vue'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  coverageDirectory: '<rootDir>/test/coverage',
  collectCoverage: true,
  mapCoverage: true,
  coverageReporters: [
    'lcov',
    'text'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^client$': '<rootDir>/framework/vue/entry/client.js',
    '^app$': '<rootDir>/framework/vue/app.js'
  },
  snapshotSerializers: [ // 配置快照测试
    '<rootDir>/node_modules/jest-serializer-vue'
  ]
};
