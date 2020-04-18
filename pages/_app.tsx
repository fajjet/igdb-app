import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import{ initStore } from 'store';
import { Page } from 'containers';

interface Props extends AppProps {
  store: any;
}

const App = ({ Component, pageProps, store }: Props) => {
  return (
    <Page>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Page>
  )
};

export default withRedux(initStore)(App);
