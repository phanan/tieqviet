'use strict';

const maps = [
	['kh', 'x'],
	['K(h|H)', 'X'],
	['c(?!h)|q', 'k'],
	['C(?!(h|H))|Q', 'K'],
	['tr|ch', 'c'],
	['T(r|R)|C(h|H)', 'C'],
	['d|gi|r', 'z'],
	['D|G(i|I)|R', 'Z'],
	['đ', 'd'],
	['Đ', 'D'],
	['ph', 'f'],
	['P(h|H)', 'F'],
	['ngh?', 'q'],
	['N(G|g)(H|h)?', 'Q'],
	['th', 'w'],
	['T(h|H)', 'W'],
	['nh', 'n\''],
	['N(H|h)', 'N\'']
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
