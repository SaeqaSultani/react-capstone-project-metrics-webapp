import React from 'react';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

it('Check any changes to the component', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
