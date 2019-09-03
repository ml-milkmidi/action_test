module.exports = {
  moduleFileExtensions: [
    'js',
    'vue',
    'json',
  ],
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '^vue$': 'vue/dist/vue.common.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!MODULE_NAME_HERE).+\\.js$',
  ],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
};
