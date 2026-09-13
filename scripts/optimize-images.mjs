/**
 * Re-encodes everything in public/images to sensible dimensions and quality.
 *
 * Needed because next.config sets images.unoptimized, so Next serves these
 * files byte-for-byte. Originals are recoverable from git history.
 *
 * Run: node scripts/optimize-images.mjs
 */
import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const DIR = "public/images";

/** Max rendered size is ~44px for avatars and ~1/4 viewport for project cards. */
const MAX_WIDTH = {
  "jessica.jpg": 320,
  "david.jpg": 320,
  "james.jpg": 320,
};
const DEFAULT_MAX_WIDTH = 1200;
const QUALITY = 72;

const kb = (n) => (n / 1024).toFixed(0);

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));
let before = 0;
let after = 0;

for (const name of files) {
  const path = join(DIR, name);
  const originalSize = (await stat(path)).size;
  const input = await readFile(path);

  // Never run a transparent source through the JPEG encoder — it would
  // silently flatten the alpha onto black and keep the .png extension.
  if ((await sharp(input).metadata()).hasAlpha) {
    console.log(`${name.padEnd(24)} skipped (has transparency)`);
    before += originalSize;
    after += originalSize;
    continue;
  }

  const output = await sharp(input)
    .resize({
      width: MAX_WIDTH[name] ?? DEFAULT_MAX_WIDTH,
      withoutEnlargement: true,
    })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toBuffer();

  if (output.length >= originalSize) {
    console.log(`${name.padEnd(24)} skipped (already smaller)`);
    before += originalSize;
    after += originalSize;
    continue;
  }

  await writeFile(path, output);
  before += originalSize;
  after += output.length;
  const saved = (100 * (1 - output.length / originalSize)).toFixed(0);
  console.log(
    `${name.padEnd(24)} ${kb(originalSize).padStart(5)} KB -> ${kb(output.length).padStart(4)} KB  (-${saved}%)`,
  );
}

console.log(
  `\nTotal ${kb(before)} KB -> ${kb(after)} KB  (-${(100 * (1 - after / before)).toFixed(0)}%)`,
);
