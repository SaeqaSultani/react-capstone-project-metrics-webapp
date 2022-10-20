import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import HomepageList from '../components/homepage/HomepageList';
import store from '../redux/configureStore';
import Detailspage from '../components/details/Detailspage';
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
      <HomepageItem />
    </Provider>,
  );

  const page = screen.getByTestId('homepageitem');

  expect(page).toBeInTheDocument();
});
