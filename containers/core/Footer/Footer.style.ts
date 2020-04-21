import styled from 'styled-components';
import { provider } from 'styles';

const Footer: any = {};

Footer.Root = styled.div`
  padding: 4rem 0;
  background-color: ${provider.color.footerBackground};
  font-weight: 400;
  color: ${provider.color.aquamarine};
`;

Footer.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Footer;
