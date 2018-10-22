import App from './index';
import { shallow,configure } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


test('renders correctly', () => {
    //Add Rendering for the starting piece.
    //This is different because this is of type 'App' which isn't a component, which means enzyme doesn't work.
    //This will need some other way to test it.
});
