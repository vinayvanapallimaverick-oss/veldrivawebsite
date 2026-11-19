// Crawls the built site (run `npm run build && npm start` first) and reports broken internal links.
const base = process.env.BASE_URL ?? "http://localhost:3000";
const seen = new Set();
const queue = ["/"];
const broken = [];

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);
  const res = await fetch(base + path, { redirect: "manual" });
  if (res.status >= 400) { broken.push(`${path} -> ${res.status}`); continue; }
  if (!(res.headers.get("content-type") ?? "").includes("text/html")) continue;
  const html = await res.text();
  for (const m of html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const href = m[1];
    if (!/\.(svg|png|ico|xml|txt)$/.test(href) && !seen.has(href)) queue.push(href);
  }
}
console.log(`Checked ${seen.size} pages.`);
if (broken.length) { console.error("Broken links:\n" + broken.join("\n")); process.exit(1); }
console.log("No broken internal links.");
