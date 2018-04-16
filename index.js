'use strict'

const beautify = require('js-beautify').js_beautify

exports.name = 'js-beautify'
exports.outputFormat = 'js'

exports.render = beautify
