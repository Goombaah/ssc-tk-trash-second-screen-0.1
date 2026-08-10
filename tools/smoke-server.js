const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp"
};

http.createServer((req, res) => {
  const url = new URL(req.url, "http://127.0.0.1");
  const relativePath = url.pathname === "/" ? "/SSC_TK_TRASH_SECOND_SCREEN.html" : decodeURIComponent(url.pathname);
  const filePath = path.join(root, relativePath);
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("forbidden");
    return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    res.setHeader("content-type", types[path.extname(filePath)] || "application/octet-stream");
    res.end(data);
  });
}).listen(8017, "127.0.0.1", () => {
  console.log("http://127.0.0.1:8017");
});
