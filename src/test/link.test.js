import renderer from 'react-test-renderer';
import React from 'react';
import Link from '../link';

it('changes the class when hovered', () => {
  const component = renderer.create(<Link page="https://google.com" />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onMouseEnter();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  renderer.act(() => {
    tree.props.onMouseLeave();
  });

  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
