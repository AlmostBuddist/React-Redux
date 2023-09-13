import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from './App';

describe('App layout', () => {
  const initialState = { counter: { value: 0 } };
  const mockStore = configureStore();

  let store;
  it('Shows "Hello world!"', () => {
    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const linkElement = screen.getByText(/Hello World!/i);

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).not.toBeNull();
  });
});
