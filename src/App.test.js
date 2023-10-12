import { render, screen } from '@testing-library/react';
import App from './App';

function dummyFunction() {
  return true;
}


test('Dummy function returns true', () => {
  expect(dummyFunction()).toBe(true);
});
