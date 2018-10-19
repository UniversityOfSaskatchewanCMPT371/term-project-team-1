const sum = require('./../App');
import React from 'react';
import App from '../';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('adds 3+2 to equal 5', () => {
 expect(sum(3,2)).toBe(5);
 expect(sum(3,2)).toNotBe(4);
});
