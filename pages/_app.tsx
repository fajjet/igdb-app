import React from 'react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { Router } from 'next/router';
import 'styles/reset.css';
import 'styles/global.css';
import 'styles/fonts.css';

import{ initStore } from 'store';
import { Page } from 'containers';

interface Props extends AppProps {
  store: any;
  router: Router;
}

const App = (props: Props) => {
  const { Component, pageProps, store, router } = props;
  const key = router.asPath;

  return (
    <>
      <Provider store={store}>
        <Page>
          <Component {...pageProps} key={key}/>
        </Page>
      </Provider>
    </>
  )
};

export default withRedux(initStore)(React.memo(App));
