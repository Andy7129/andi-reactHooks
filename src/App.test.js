function dummyFunction() {
  return true;
}


test('Dummy function returns true', () => {
  expect(dummyFunction()).toBe(true);
});
