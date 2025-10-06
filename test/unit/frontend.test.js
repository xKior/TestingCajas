
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf8');

let window, document;

beforeEach(() => {
  document = (new (require('jsdom')).JSDOM(html, { runScripts: "dangerously" })).window.document;
  window = document.defaultView;

});

test('escapeHtml should escape tags', () => {

  const { escapeHtml } = require('../../src/main'); 
  const raw = '<script>alert(1)</script>';
  expect(escapeHtml(raw)).toBe('&lt;script&gt;alert(1)&lt;/script&gt;');
});

test('getPriorityText returns correct text', () => {
  const { getPriorityText } = require('../../src/main');
  expect(getPriorityText(0)).toBe('Baja');
  expect(getPriorityText(1)).toBe('Media');
  expect(getPriorityText(2)).toBe('Alta');
  expect(getPriorityText(9)).toBe('N/A');
});

test('formatDate returns - for null', () => {
  const { formatDate } = require('../../src/main');
  expect(formatDate(null)).toBe('-');
});

test('loadTodos handles API error result', async () => {
  const mod = require('../../src/main');

  global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ code: 500, data: null })
  }));
  await mod.loadTodos();

});
