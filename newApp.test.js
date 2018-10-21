// __tests__/Intro-test.js
import React from 'react';
import newApp from './newApp';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<newApp />).toJSON();
  expect(tree).toMatchSnapshot();
});