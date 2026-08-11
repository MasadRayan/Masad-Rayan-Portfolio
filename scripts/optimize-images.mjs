import { readdir, stat } from "node:fs/promises";
import { join, extname, parse } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = fileURLToPath(new URL("../public/projects/", import.meta.url));
const QUALITY = 78;
const MAX_WIDTH = 1440;
const MAX_HEIGHT = 3000;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

const files = await walk(ROOT);

let before = 0;
let after = 0;

for (const file of files) {
  if (![".png", ".jpg", ".jpeg"].includes(extname(file).toLowerCase())) continue;

  const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const base = await stat(file);
  const info = await sharp(file)
    .resize({
      width: MAX_WIDTH,
      height: MAX_HEIGHT,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: QUALITY, effort: 4 })
    .toFile(out);

  before += base.size;
  after += info.size;
  console.log(
    `${parse(file).base.padEnd(40)} ${(base.size / 1024).toFixed(0).padStart(6)} KB -> ${(info.size / 1024).toFixed(0).padStart(5)} KB  (${parse(out).base})`
  );
}

console.log(
  `\nTotal: ${(before / 1024 / 1024).toFixed(1)} MB -> ${(after / 1024 / 1024).toFixed(1)} MB  (saved ${((before - after) / 1024 / 1024).toFixed(1)} MB)`
);