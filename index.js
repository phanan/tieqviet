'use strict';

const maps = [
	['kh', 'x'],
	['c(?!h)', 'k'],
	['q', 'k'],
	['tr', 'c'],
	['ch', 'c'],
	['d', 'z'],
	['gi', 'z'],
	['r', 'z'],
	['đ', 'd'],
	['ph', 'f'],
	['ngh?', 'q'],
	['gh', 'g'],
	['th', 'w'],
	['nh', 'n\'']
];

/**
 * Capitalize the first letter in a string.
 * @param {*} string
 */
const capitalize = string => `${string.charAt(0).toUpperCase()}${string.slice(1)}`;

/**
 * Convert using a single map element.
 * @param {*} input
 * @param {*} map
 */
const convert = (input, map) => {
	return input
		.replace(new RegExp(map[0], 'g'), map[1])
		.replace(new RegExp(capitalize(map[0]), 'g'), capitalize(map[1]));
};

module.exports = input => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	maps.forEach(map => {
		input = convert(input, map);
	});

	return input;
};
