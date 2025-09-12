// node scripts/i18n-codemod.js
const fs = require("fs");
const glob = require("glob");
const { parse } = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");

const FILES = glob.sync("src/**/*.{ts,tsx,js,jsx}", { nodir: true });

const RENAMES = [
  // t?.keyIndicators?.X -> t?.kpis?.X
  { from: "keyIndicators", to: "kpis" },
  // liveNote -> realtimeNotice (только как свойство объекта t)
  { from: "liveNote", to: "realtimeNotice", onlyInside: "kpis" },
];

let filesChanged = 0, edits = 0;

for (const file of FILES) {
  const code = fs.readFileSync(file, "utf8");
  const ast = parse(code, { sourceType: "module", plugins: ["jsx", "typescript"] });
  let localEdits = 0;

  traverse(ast, {
    OptionalMemberExpression(path) {
      // ловим t?.keyIndicators?.xxx и т.п.
      const chain = [];
      let cur = path.node;
      while (t.isOptionalMemberExpression(cur)) {
        const prop = cur.property;
        chain.unshift(t.isIdentifier(prop) ? prop.name : (t.isStringLiteral(prop) ? prop.value : null));
        cur = cur.object;
      }
      // cur может быть t / t.something — нам это не критично
      if (!chain.every(Boolean)) return;

      // переименование уровня 1: keyIndicators -> kpis
      if (chain.includes("keyIndicators")) {
        const newChain = chain.map((p) => (p === "keyIndicators" ? "kpis" : p));
        applyRename(path, chain, newChain);
      }

      // внутри kpis: liveNote -> realtimeNotice
      if (chain[0] === "realtimeNotice") return; // уже починено
      const insideKpis = chain.includes("kpis");
      if (insideKpis && chain.includes("liveNote")) {
        const newChain = chain.map((p) => (p === "liveNote" ? "realtimeNotice" : p));
        applyRename(path, chain, newChain);
      }

      function applyRename(pth, oldChain, newChain) {
        // пересобираем OptionalMemberExpression по новой цепочке
        const base = getRootObject(pth.node); // t?..?.kpis...
        let node = base;
        for (const seg of newChain) {
          node = t.optionalMemberExpression(node, t.identifier(seg), false, true);
        }
        pth.replaceWith(node);
        localEdits++;
      }

      function getRootObject(n) {
        let cur = n;
        while (t.isOptionalMemberExpression(cur)) cur = cur.object;
        return cur; // это "t?" часть
      }
    },
  });

  if (localEdits) {
    fs.writeFileSync(file, generate(ast, { jsescOption: { minimal: true } }).code, "utf8");
    filesChanged++;
    edits += localEdits;
  }
}

console.log(`Codemod done: files=${filesChanged}, edits=${edits}`);
