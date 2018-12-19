'use strict';

var _locales = require('../locales');

describe('getDefaultLocales', function () {
  it('returns an array of default locales', function () {
    var locales = (0, _locales.getDefaultLocales)();

    expect(locales).toEqual(['en-US', 'en', 'en-GB']);
  });
});

describe('getDefaultLocale', function () {
  it('returns en-US', function () {
    var locale = (0, _locales.getDefaultLocale)();

    expect(locale).toBe('en-US');
  });
});

describe('getLocale', function () {
  it('returns default locale on initial run', function () {
    var locale = (0, _locales.getLocale)();

    expect(locale).toBe('en-US');
  });
});

describe('setLocale', function () {
  it('saves a given locale so that getLocale can read it', function () {
    (0, _locales.setLocale)('pl-PL');

    var locale = (0, _locales.getLocale)();

    expect(locale).toBe('pl-PL');
  });
});