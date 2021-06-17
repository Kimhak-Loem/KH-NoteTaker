import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../app/components/Home/Home.component';

describe('Home Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
