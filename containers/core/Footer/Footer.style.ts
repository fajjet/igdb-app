import styled from 'styled-components';
import { provider } from 'styles';

const Footer: any = {};

Footer.Root = styled.div`
  padding: 1.75rem 0;
  height: 14rem;
  background-color: #131313;
  font-weight: 400;
  color: ${provider.color.aquamarine};
  position: relative;
  box-shadow: 0 -15px 15px rgba(0,0,0,0.005);
  &:before{
    content: '';
    position: absolute;
    bottom: 33.3333333%;
    left: 0;
    width: 100%;
    height: 33.33333333%;
    background-color: #1d1d1d;
    box-shadow: 0 -15px 15px rgba(0,0,0,0.005);
  }
  &:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 33.3333333%;
    background-color: #272727;
    box-shadow: 0 -15px 15px rgba(0,0,0,0.005);
  }
`;

Footer.Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Footer;
