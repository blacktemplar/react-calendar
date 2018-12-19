'use strict';

var _dateFormatter = require('../dateFormatter');

describe('formatDate', function () {
  it('returns proper full numeric date', function () {
    var date = new Date(2017, 1, 1);

    var formattedDate = (0, _dateFormatter.formatDate)(date);

    expect(formattedDate).toBe('2/1/2017');
  });
});

describe('formatMonthYear', function () {
  it('returns proper month name and year', function () {
    var date = new Date(2017, 1, 1);

    var formattedDate = (0, _dateFormatter.formatMonthYear)(date);

    expect(formattedDate).toBe('February 2017');
  });
});

describe('formatMonth', function () {
  it('returns proper month name', function () {
    var date = new Date(2017, 1, 1);

    var formattedDate = (0, _dateFormatter.formatMonth)(date);

    expect(formattedDate).toBe('February');
  });
});

describe('formatShortWeekday', function () {
  it('returns proper short weekday name', function () {
    var date = new Date(2017, 1, 1);

    var formattedDate = (0, _dateFormatter.formatShortWeekday)(date);

    expect(formattedDate).toBe('Wed');
  });
});