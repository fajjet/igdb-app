import React from 'react';

import Link from 'next/link';
import Styled from './Header.style';

const Header = () => {
  return (
    <Styled.Root as={'header'}>
      <Styled.Wrapper className={'content-wrapper'}>
        <Link href={'/'} passHref>
          <Styled.Link>Home</Styled.Link>
        </Link>
      </Styled.Wrapper>
    </Styled.Root>
  )
};

export default React.memo(Header);
