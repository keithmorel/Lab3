const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require('fs-extra'));

async function simplify(text) {
	if (typeof text !== 'string') {
		throw TypeError('Input must be a string!');
	}
	return text.toLowerCase().replace(/[^0-9a-z]/gi, '').replace(/\s+/g, ' ');
	// All lowercase, removed non-letters, replaced multiple whitespace with single
}

async function createMetrics(text) {
	if (typeof text !== 'string') {
		throw TypeError('Input must be a string!');
	}
	const simplified = simplify(text);
	const list_words = simplified.split(' ');
	let total_letters = 0;
	let word_count = 0;
	let word_Occurences = {};
	for (let x = 0; x < list_words.keys.length; x++) {
		for (let y = 0, list_words[x].length, y++) {
			if (list_words[x][y] != ' ') {
				total_letters++;
			}
		}
		if (list_words.hasOwnProperty(list_words[x])) {
			word_Occurences[list_words[x]]++;
		}
		else if (!list_words.hasOwnProperty(list_words[x])) {
			word_Occurences[list_words[x]] = 1;
		}
		
	}
	let long_words = 0;
	let total_words = 0;
	for (let z = 0; x < list_words.keys.length; z++) {
		if (list_words[z].length >= 6) {
			long_words++;
		}
		total_words++;
	}
	const unique_words = word_Occurences.length;
	const average_word_length = total_letters / word_count;

	return {
		totalLetters: total_letters,
		totalWords: total_words,
		uniqueWords: unique_words,
		longWords: long_words,
		averageWordLength: average_word_length,
		wordOccurences: word_Occurences;
}

module.exports {
	simplify,
	createMetrics
}
