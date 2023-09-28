const fs = require('fs');
const path = require('path');

const folderPath = '../execute';
const outputFile = "../execute/output.js";

const executeScript = (scriptPath) => {
  const script = require(scriptPath);
  // Wykonaj skrypt
};

const scriptsToExecute = [
  './dba.js',
  './dbvd.js',
  './data.js',
  './dbvd.js',
  './datafinalize.js'
];

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Błąd podczas wczytywania folderu:', err);
    return;
  }

  const jsFiles = files.filter(file => file.endsWith('.js'));
  const fileContents = jsFiles.map(file => {
    const filePath = path.join(folderPath, file);
    return fs.readFileSync(filePath, 'utf8');
  });

  const mergedCode = fileContents.join('\n');

  fs.writeFile(outputFile, mergedCode, 'utf8', (err) => {
    if (err) {
      console.error('Błąd podczas zapisywania pliku:', err);
      return;
    }

    console.log('Pliki zostały połączone i zapisane w:', outputFile);

    executeScriptsInOrder(scriptsToExecute, outputFile);
  });
});

const executeScriptsInOrder = (scripts, outputFile, index = 0) => {
  if (index >= scripts.length) {
    console.log('Wykonano wszystkie skrypty.');
    return;
  }

  const scriptPath = scripts[index];
  executeScript(scriptPath);

  fs.appendFileSync(outputFile, `\n// Wynik wykonania skryptu ${scriptPath}\n`, 'utf8');

  executeScriptsInOrder(scripts, outputFile, index + 1);
};