import { render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

describe('App', () => {
  test('renders App Component', () => {
    render(
    <Provider store={store}>
      <App />
    </Provider>);
  });
});