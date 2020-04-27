import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
import Head from 'next/head'
import { useRouter } from 'next/router';

import { Company } from 'containers';

const CompanyPage = () => {

  // const [error, setError] = useState(false);
  const router = useRouter();
  const slug = String(router.query.slug);
  console.log(slug)

  const fetchData = async () => {
    // if (!game) {
    //   const response = await fetchDetailGameBySlug(slug, dispatch);
    //   if (response) {
    //     dispatch(actions.addGame(response));
    //   } else {
    //     setError(true);
    //   }
    // }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Company page</title>
        <meta name="description" content={'descr'} />
      </Head>
      <Company
        data={'a'}
      />
    </>
  )
};

export default CompanyPage;
