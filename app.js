// Imports
const fse = require('fs-extra');
const { getFileAsString, getFileAsJSON,	saveStringToFile, saveJSONToFile } = require('./fileData');
const {	simplify, createMetrics } = require('./textMetrics');

async function runAllMetrics() {
	try {
		const fileList = ['chapter1.txt', 'chapter2.txt', 'chapter3.txt'];
		for (file in fileList) {
			const jsonFile = file.replace('.txt', '.result.json');
			const debug_file = file.replace('.txt', '.debug.txt');
			if (!await fse.pathExists()) {
				const fileAsString = getFileAsString(file);
				const simplifiedString = simplify(fileAsString);
				const fileMetrics = createMetrics(simplifiedString);
				await saveStringToFile(debug_file, simplifiedString);
				await saveJSONToFile(jsonFile, fileMetrics);
			}
			console.log(await getFileAsString(jsonFile));
		}
	}
	catch (err) {
		throw err;
	}
};		
