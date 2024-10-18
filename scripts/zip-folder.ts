// Core Modules
import * as fs from 'fs';
import * as path from 'path';

// NPM Modules
import * as archiver from 'archiver';

const packageDir = path.resolve(__dirname, '../vwp-plugin');
const outputZip = path.resolve(__dirname, '../vwp-plugin.zip');

// Create a file to stream the archive data to.
const output = fs.createWriteStream(outputZip);
const archive = archiver('zip', {
  zlib: { level: 9 } // Maximum compression
});

// Listen for all archive data to be written.
output.on('close', function () {
  console.log(archive.pointer() + ' total bytes');
  console.log('Plugin zipped successfully!');
});

// Catch warnings (e.g., stat failures)
archive.on('warning', function (err) {
  if (err.code === 'ENOENT') {
    console.warn('Warning:', err);
  } else {
    throw err;
  }
});

// Catch errors
archive.on('error', function (err) {
  throw err;
});

// Pipe archive data to the file
archive.pipe(output);

// Append files from the plugin package directory
archive.directory(packageDir, false);

// Finalize the archive (complete the zipping process)
archive.finalize();
