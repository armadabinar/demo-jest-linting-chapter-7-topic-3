import add from '../add';

test('shall add two numbers', () => {
  const result = add(1, 3);

  expect(result).toBe(4);
});
