const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../../src/index.html'), 'utf8');

const { renderTodos } = require('../../src/main'); // adaptar

(async () => {
  const dom = new JSDOM(html, { runScripts: "dangerously" });
  global.document = dom.window.document;
  global.window = dom.window;

  const big = new Array(1000).fill(0).map((_,i) => ({
    id: i+1,
    title: `Tarea ${i+1}`,
    description: 'desc',
    priority: i % 3,
    isCompleted: false,
    dueAt: null
  }));

  console.time('render1000');
  await renderTodos(big); 
  console.timeEnd('render1000');
})();
