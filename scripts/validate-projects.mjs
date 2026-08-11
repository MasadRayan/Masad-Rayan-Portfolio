import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const DATA_FILE = join(root, "src", "data", "projects.json");
const PUBLIC_DIR = join(root, "public");

const REQUIRED_FIELDS = [
  "id",
  "title",
  "subtitle",
  "image",
  "description",
  "overview",
  "highlights",
  "tags",
  "span",
];
const STRING_FIELDS = ["title", "subtitle", "image", "description", "overview", "span"];
const URL_FIELDS = ["liveUrl", "githubUrl"];

let errors = 0;

function fail(message) {
  errors++;
  console.error(`  ✗ ${message}`);
}

function checkString(project, field) {
  const value = project[field];
  if (typeof value !== "string" || value.trim() === "") {
    fail(`"${field}" is missing or empty in project "${project.title ?? project.id ?? "?"}"`);
    return false;
  }
  return true;
}

function checkNonEmptyArray(project, field) {
  if (!Array.isArray(project[field]) || project[field].length === 0) {
    fail(`"${field}" must be a non-empty array in project "${project.title ?? project.id ?? "?"}"`);
    return false;
  }
  return true;
}

let data;
try {
  data = JSON.parse(readFileSync(DATA_FILE, "utf8"));
} catch (err) {
  console.error(`✗ Could not read ${DATA_FILE}: ${err.message}`);
  process.exit(1);
}

if (!Array.isArray(data)) {
  console.error("✗ projects.json must contain a top-level array of project objects.");
  process.exit(1);
}

if (data.length === 0) {
  console.error("✗ projects.json contains no projects.");
  process.exit(1);
}

const ids = new Set();

data.forEach((project) => {
  console.log(`\nChecking project: ${project.title ?? project.id ?? "?"}`);

  for (const field of REQUIRED_FIELDS) {
    if (STRING_FIELDS.includes(field)) checkString(project, field);
  }
  checkNonEmptyArray(project, "highlights");
  checkNonEmptyArray(project, "tags");

  for (const field of URL_FIELDS) {
    const value = project[field];
    if (typeof value === "string" && value.trim() !== "") {
      if (!/^https?:\/\//.test(value)) {
        fail(`"${field}" should start with http:// or https:// (got "${value}")`);
      }
    } else {
      fail(`"${field}" is missing or empty in project "${project.title}"`);
    }
  }

  if (ids.has(project.id)) {
    fail(`duplicate project id: ${project.id}`);
  }
  ids.add(project.id);

  const imagePaths = [project.image, ...(project.images ?? [])];
  for (const path of imagePaths) {
    if (typeof path !== "string" || !path.startsWith("/")) {
      fail(`image path must start with "/" (got "${path}")`);
      continue;
    }
    if (!existsSync(join(PUBLIC_DIR, path))) {
      fail(`image not found: ${path}`);
    }
  }
});

console.log(`\n${data.length} project(s) checked, ${errors ? `${errors} error(s) found` : "all valid ✓"}`);
process.exit(errors ? 1 : 0);