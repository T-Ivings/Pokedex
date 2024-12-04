import * as fs from 'fs';

function csvToJson(filePath: string): Record<number, string> {
  const jsonData: Record<number, string> = {};

  const csvData = fs.readFileSync(filePath, 'utf8');
  const rows = csvData.split('\n');

  for (const row of rows) {
    const [pokemonNumberStr, pokemonName] = row.split(',');

    if (pokemonNumberStr && pokemonName) {
      const pokemonNumber = parseInt(pokemonNumberStr.trim());
      jsonData[pokemonNumber] = pokemonName.trim();
    }
  }

  return jsonData;
}

// Example usage:
const filePath = require.resolve("./pokemon.csv");
const jsonData = csvToJson(filePath);

const jsonOutput = JSON.stringify(jsonData, null, 2);

fs.writeFileSync('pokemon.json', jsonOutput);
console.log('JSON data written to output.json');