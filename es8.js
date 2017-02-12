'use strict';

module.exports = {
    'extends': [
        './es7',
    ].map(require.resolve),
    'parserOptions': {
        'ecmaVersion': 8,
        'sourceType': 'module',
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
        },
    },
};