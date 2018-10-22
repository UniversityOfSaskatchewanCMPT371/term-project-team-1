;
import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

 const ourApp = new App();
test('renders correctly', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});
test('adds 3+2 to equal 5', () => {
	expect(ourApp.sum(3,2)).toBe(5);
	expect(ourApp.sum(3,2)).not.toBe(4);
});
