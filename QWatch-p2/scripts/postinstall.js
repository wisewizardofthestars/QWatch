const { execSync } = require('child_process');

console.log('Running postinstall script...');

try {
  // Build the Tailwind CSS file
  execSync('npx tailwindcss build ./src/styles/tailwind.css -o ./src/styles/main.css');
} catch (e) {
  console.log(e);
}

console.log('Postinstall script finished.');
