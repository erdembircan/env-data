/**
 * a singleton class to select different config
 * objects for different env values
 */
class EnvData {
  constructor() {
    this._data = { defaultEnv: 'development' };
  }

  /**
   * set parameters for class
   * @param {object} params - an object that has env types for properties
   * and corresponding key-value pairs for data for that environment
   */
  setParameters(params) {
    if (typeof params === 'object') {
      Object.keys(params).map((key) => {
        const value = params[key];
        if (key === 'defaultEnv') {
          this._data.default = value;
        } else if (typeof value === 'string') {
          this._data[key] = require(value);
        } else if (typeof value === 'object') {
          this._data[key] = value;
        }
      });
    }
  }
  /**
   * returns data depending of current NODE_ENV value
   * @param {string} key - key
   * @returns {*} data - data
   */
  getData(key) {
    const currentEnv = process.env.NODE_ENV || this._data.default;
    return this._data[currentEnv][key];
  }
}

module.exports = new EnvData();
