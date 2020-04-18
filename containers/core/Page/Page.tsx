import React from 'react';

import { Layout } from 'containers';

type Props = {
  children: React.ReactNode;
};

const Page = (props: Props) => {
  return (
    <Layout>
      {props.children}
    </Layout>
  )
};

export default Page;
