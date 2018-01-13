const path = require('path');
const envData = require('../index');
const otherEnvData = require('../index');
const prodMockData = require('./prodDataMock');

afterAll(() => {
  process.end.NODE_ENV = 'test';
});

describe('data-env', () => {
  it('should be a singleton', () => {
    envData.setParameters({
      test: { port: 3000 },
      production: path.resolve(__dirname, './prodDataMock.js'),
      defaultEnv: 'test',
    });

    expect(envData.getData('port')).toBe(otherEnvData.getData('port'));
  });

  it('should return correct value for current NODE_ENV', () => {
    process.env.NODE_ENV = 'production';
    expect(envData.getData('port')).toBe(prodMockData.port);
  });
});
