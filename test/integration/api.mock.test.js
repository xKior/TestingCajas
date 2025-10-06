
const mod = require('../../src/main');

beforeEach(() => {
  global.fetch = jest.fn();
});

test('full CRUD flow with mocked responses', async () => {

  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve({ code: 200, data: [] })
  });
  await mod.loadTodos();
  expect(mod.todos.length).toBe(0);


  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve({ code: 201, data: { id: 1, title: 'x' } })
  });
  await mod.createTodo({ title: 'x' });

  fetch.mockResolvedValueOnce({
    json: () => Promise.resolve({ code: 200, data: [{ id:1, title:'x' }] })
  });
  await mod.loadTodos();
  expect(mod.todos.length).toBe(1);
});
