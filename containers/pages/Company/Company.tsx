import React from 'react';

import Styled from './Company.style';

interface Props {
  data: any | null;
  error?: boolean;
}
const Company = (props: Props) => {
  // const { data, error } = props;

  return (
    <Styled.Root>
      company
    </Styled.Root>
  )
};

export default React.memo(Company);
