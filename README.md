# env-data [![Build Status](https://travis-ci.org/erdembircan/env-data.svg?branch=master)](https://travis-ci.org/erdembircan/env-data)

---

A library to add and select key value pairs for different NODE_ENV values .

---

## Installation

`npm install env-data --save`

---

## Usage

contents of index.js

```
const envData = require('envData');

envData.setParameters({
      test: { port: 3000,secret: 'testSecret },
      development: {port: 4000, secret: 'superSecret'}
      production: path.resolve(__dirname, './prodData.js'),
      defaultEnv: 'test',
    });
```

contents of prodData.js

```
module.exports = {port: 8000, secret: 'prodSecret'}
```

contents of someJsOtherThanIndex.js

```
const envData = require('envData');

envData.getData('secret');
```

---

## API

### setParameters(params)

set parameters for key value pairs of NODE_ENV props

#### params

Type: `object`

#### params.defaultEnv

Type: `string`

Default: `development`

override default env value

<br/>

### getData (key)

get value of the given key

#### key

Type: `string`

key for value

---

## License

Copyright © 2018, Erdem Bircan. Released under the MIT License.
