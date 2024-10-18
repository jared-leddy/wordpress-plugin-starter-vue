// Core Modules
import * as path from 'path';

// NPM Modules
import * as fs from 'fs-extra';

// Paths
const distDir = path.resolve(__dirname, '../dist');
const srcDir = path.resolve(__dirname, '../src');
const packageDir = path.resolve(__dirname, '../vwp-plugins');

// Clean up existing package directory
fs.removeSync(packageDir);

// Copy necessary files to the package directory
fs.ensureDirSync(packageDir);
fs.copySync(srcDir, packageDir); // Copy everything from src to package dir

// Move built assets from dist to plugin package
fs.copySync(distDir, path.join(packageDir, 'dist'));

// remove /dist folder
fs.removeSync(distDir);

console.log('Plugin packaged successfully!');
