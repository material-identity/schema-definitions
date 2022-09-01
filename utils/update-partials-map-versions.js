const { writeFileSync } = require('fs');
const { loadExternalFile } = require('@s1seven/schema-tools-utils');
const { resolve } = require('path');
const { version: pkgVersion } = require(resolve(__dirname, '../package.json'));

(async function updatePartialsMapVersions() {
  const newVersion = process.argv[2] || pkgVersion;
  const partialsMapFilePath = resolve(__dirname, '../partials-map.json');
  const partialsMap = await loadExternalFile(partialsMapFilePath, 'json');

  Object.keys(partialsMap).forEach((key) => {
    const url = partialsMap[key];
    const regex = new RegExp(/(?:v)((\d\.){2}\d)/);
    partialsMap[key] = url.replace(regex, `v${newVersion}`);
  });

  writeFileSync(partialsMapFilePath, JSON.stringify(partialsMap, null, 2));
})();
