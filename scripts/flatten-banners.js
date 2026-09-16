'use strict';

// Chrome Web Store promotional images must be 24-bit RGB PNGs with no alpha channel. Brander's
// SVG->PNG conversion always produces RGBA (even for fully opaque banners), so flatten them here
// as a post-processing step after `brander` runs.

const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');

const bannerDir = path.join(__dirname, '..', 'assets', 'banner');

async function findPngFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...await findPngFiles(fullPath));
    } else if (entry.name.endsWith('.png')) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  const files = await findPngFiles(bannerDir);

  for (const file of files) {
    const tempFile = `${file}.tmp`;

    await sharp(file)
      .flatten({ background: '#FFFFFF' })
      .png()
      .toFile(tempFile);
    await fs.rename(tempFile, file);

    console.log('Flattened banner PNG file: %s', path.relative(process.cwd(), file));
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
