import React from 'react';

import Link from 'next/link';
import Styled from './Header.style';

const Header = () => {
  return (
    <Styled.Root as={'header'}>
      <Styled.Wrapper className={'content-wrapper'}>
        <Link href={'/'} passHref>
          <Styled.Link as={'a'}>Home</Styled.Link>
        </Link>
        <Styled.Link as={'a'} href={'https://github.com/fajjet/igdb-app'}>Github</Styled.Link>
      </Styled.Wrapper>
    </Styled.Root>
  )
};

export default React.memo(Header);
