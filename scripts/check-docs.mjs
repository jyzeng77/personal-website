import { readFile, readdir, stat } from "node:fs/promises";
import { dirname, resolve, join } from "node:path";
import { createHash } from "node:crypto";

async function markdownFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) =>
      entry.isDirectory()
        ? markdownFiles(join(directory, entry.name))
        : entry.name.endsWith(".md")
          ? [join(directory, entry.name)]
          : [],
    ),
  );
  return nested.flat();
}

let links = 0;
for (const file of [
  "README.md",
  "AGENTS.md",
  ...(await markdownFiles("docs")),
]) {
  const content = await readFile(file, "utf8");
  for (const match of content.matchAll(/\]\(([^)]+)\)/g)) {
    const target = match[1].split("#")[0];
    if (!target || /^[a-z]+:/i.test(target)) continue;
    await stat(resolve(dirname(file), decodeURIComponent(target)));
    links += 1;
  }
}

const manifest = JSON.parse(
  await readFile("docs/references/manifest.json", "utf8"),
);
for (const asset of manifest.assets) {
  const bytes = await readFile(join("docs", asset.path));
  if (createHash("sha256").update(bytes).digest("hex") !== asset.sha256)
    throw new Error(`Reference changed: ${asset.path}`);
}
console.log(
  `Checked ${links} local Markdown links and ${manifest.assets.length} original reference checksums.`,
);
