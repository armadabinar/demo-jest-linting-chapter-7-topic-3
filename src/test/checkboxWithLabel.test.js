import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import CheckboxWithLabel from '../CheckboxWithLabel';

afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const view = render(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  expect(view.getByLabelText(/off/i)).toBeTruthy();

  fireEvent.click(view.getByLabelText(/off/i));

  expect(view.getByLabelText(/on/i)).toBeTruthy();
});
