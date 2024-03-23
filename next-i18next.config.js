const path = require('path');

module.exports = {
    i18n: { locales: ['en', 'ru'], defaultLocale: 'ru', localeDetection: true },
    localePath: path.resolve('./locales'),
};

