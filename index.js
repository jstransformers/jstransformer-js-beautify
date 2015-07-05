'use strict';

var beautify = require('js-beautify').js_beautify;

exports.name = 'js-beautify';
exports.outputFormat = 'js';

exports.render = beautify;
