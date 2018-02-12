const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require('fs-extra'));

async function getFileAsString(path) {
	try {
		if (typeof path !== 'string') {
			throw TypeError('The input path must be a valid string!');
		}
		return await fs.readFile(path, 'utf-8');
	}
	catch (err) {
		throw err;
	}
}

async function getFileAsJSON(path) {
	try {
		if (typeof path !== 'string') {
			throw TypeError('The input path must be a valid string!');
		}
		return await fs.readJSON(path);
	}
	catch (err) {
		throw err;
	}
}

async function saveStringToFile(path, text) {
	try {
		if (typeof path !== 'string' || typeof text !== 'string') {
			throw TypeError('Both arguments must be valid strings!');
		}
		const written_str = await fs.writeFile(path, text);
		return true;
	}
	catch (err) {
		throw err;
	}
}

async function saveJSONToFile(path, obj) {
	try {
		if (typeof path !== 'string') {
			throw TypeError('The input path must be a valid string!');
		}
		if (typeof obj !== 'object') {
			throw TypeError('The input object must be a valid string!');
		}
		const written_json = await fs.writeJSON(path, obj, { spaces: '\t' });
		return true;
	}
	catch (err) {
		throw err;
	}
}

module.exports = {
	getFileAsString,
	getFileAsJSON,
	saveStringToFile,
	saveJSONToFile
}

