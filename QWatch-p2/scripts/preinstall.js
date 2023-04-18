const { execSync } = require('child_process');

console.log('Running preinstall script...');

try {
  // Remove the existing "node_modules" directory
  execSync('rm -rf node_modules');
} catch (e) {
  // Do nothing if the "node_modules" directory does not exist
}

console.log('Preinstall script finished.');
