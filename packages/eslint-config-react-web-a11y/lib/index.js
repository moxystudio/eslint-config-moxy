'use strict';

module.exports = {
    plugins: [
        'jsx-a11y',
    ],
    extends: [
        './rules/jsx-a11y',
    ].map(require.resolve),
};
