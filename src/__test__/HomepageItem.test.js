import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../redux/configureStore';
import HomepageItem from '../components/homepage/HomepageItem';

it('Check any changes to the component', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <HomepageItem />
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('the component should render a div container', () => {
  render(
    <Provider store={store}>
      <HomepageItem  title="title"/>
    </Provider>,
  );

  const page = screen.getByTestId('homepageitem');

  expect(page).toBeInTheDocument();
});
