# jstransformer-js-beautify

[JS Beautifier](https://github.com/beautify-web/js-beautify) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-js-beautify/master.svg)](https://travis-ci.org/jstransformers/jstransformer-js-beautify)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-js-beautify/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-js-beautify)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-js-beautify/master.svg)](http://david-dm.org/jstransformers/jstransformer-js-beautify)
[![NPM version](https://img.shields.io/npm/v/jstransformer-js-beautify.svg)](https://www.npmjs.org/package/jstransformer-js-beautify)

## Installation

    npm install jstransformer-js-beautify

## API

```js
var js-beautify = require('jstransformer')(require('jstransformer-js-beautify'));

js-beautify.render('var a=3;').body
//=> 'var a = 3;'
```

## License

MIT
