// Clean install script for coffee-demo
// Run this after package.json updates

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const nodeModulesPath = path.join(projectDir, 'node_modules');
const lockFile = path.join(projectDir, 'package-lock.json');

console.log('🔧 Starting clean install...');
console.log('');

try {
  // Step 1: Remove node_modules
  console.log('📦 Removing node_modules folder...');
  if (fs.existsSync(nodeModulesPath)) {
    fs.rmSync(nodeModulesPath, { recursive: true, force: true });
    console.log('✅ node_modules removed');
  } else {
    console.log('ℹ️  node_modules already removed');
  }
  
  // Step 2: Remove package-lock.json
  console.log('');
  console.log('🗑️  Removing package-lock.json...');
  if (fs.existsSync(lockFile)) {
    fs.unlinkSync(lockFile);
    console.log('✅ package-lock.json removed');
  } else {
    console.log('ℹ️  package-lock.json already removed');
  }
  
  // Step 3: Install fresh
  console.log('');
  console.log('🚀 Running: npm install');
  console.log('');
  execSync('npm install', { 
    stdio: 'inherit',
    cwd: projectDir
  });
  
  console.log('');
  console.log('✅ Clean install completed!');
  console.log('');
  console.log('Next steps:');
  console.log('1. Run: npm run dev');
  console.log('2. Check if errors are resolved');
  console.log('');
  
} catch (error) {
  console.error('❌ Error during clean install:', error.message);
  process.exit(1);
}
