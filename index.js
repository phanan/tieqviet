'use strict';

const maps = [
	['k(h|H)', 'x'],
	['K(h|H)', 'X'],
	['c(?!(h|H))|q', 'k'],
	['C(?!(h|H))|Q', 'K'],
	['t(r|R)|c(h|H)', 'c'],
	['T(r|R)|C(h|H)', 'C'],
	['d|g(i|I)|r', 'z'],
	['D|G(i|I)|R', 'Z'],
	['đ', 'd'],
	['Đ', 'D'],
	['p(h|H)', 'f'],
	['P(h|H)', 'F'],
	['n(g|G)(h|H)?', 'q'],
	['N(g|G)(h|H)?', 'Q'],
	['g(h|H)', 'g'],
	['G(h|H)', 'G'],
	['t(h|H)', 'w'],
	['T(h|H)', 'W'],
	['n(h|H)', 'n\''],
	['N(h|H)', 'N\'']
];

module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return maps.reduce((seed, map) => {
		input = input.replace(new RegExp(map[0], 'g'), map[1]);
		return input;
	}, input);
};
