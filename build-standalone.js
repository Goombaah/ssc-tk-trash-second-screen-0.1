const fs = require("fs");
const path = require("path");

const mime = {
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml"
};

function dataUri(filePath) {
  return `data:${mime[path.extname(filePath)]};base64,${fs.readFileSync(filePath).toString("base64")}`;
}

let html = fs.readFileSync("SSC_TK_TRASH_SECOND_SCREEN.html", "utf8");
let css = fs.readFileSync(path.join("css", "ssc-tk-trash.css"), "utf8");
let js = fs.readFileSync(path.join("js", "ssc-tk-trash.js"), "utf8");

css = css.replace(
  'url("../assets/UI-RaidTargetingIcons.png")',
  `url("${dataUri(path.join("assets", "UI-RaidTargetingIcons.png"))}")`
);

const embeddedIcons = {};
for (const fileName of fs.readdirSync("assets")) {
  if (fileName.endsWith(".jpg")) {
    embeddedIcons[path.basename(fileName, ".jpg")] = dataUri(path.join("assets", fileName));
  }
}

js = js.replace(
  "const icon = (name) => `assets/${name}.jpg`;",
  `const embeddedIcons = ${JSON.stringify(embeddedIcons)};\nconst icon = (name) => embeddedIcons[name];`
);

html = html.replace(
  /<link rel="stylesheet" href="css\/ssc-tk-trash\.css(?:\?[^"]*)?">/,
  `<style>\n${css}\n</style>`
);

html = html.replace(
  /  <script src="js\/ssc-tk-trash\.js(?:\?[^"]*)?"><\/script>/,
  `  <script>\n${js}\n  </script>`
);

fs.mkdirSync("netlify_single_file", { recursive: true });
fs.writeFileSync(path.join("netlify_single_file", "index.html"), html);

console.log(`Wrote netlify_single_file/index.html (${html.length} bytes)`);
