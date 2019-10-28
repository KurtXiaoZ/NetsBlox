const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, 'wdc05a2013d18o.txt');
const lines = fs.readFileSync(dataFile, 'utf8').split('\n');

// Remove all the headers and descriptions
const dataRegex = /^-?\d/;
while (!dataRegex.test(lines[0])) {
    lines.shift();
}
while (!dataRegex.test(lines[lines.length-1])) {
    lines.pop();
}

const records = lines
    .map(line => {
        const [year, value] = line.split('\t');
        const core = 'WAIS';
        return {core, year, datatype: 'Delta18O', value};
    });

module.exports = records;