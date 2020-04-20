import styled from 'styled-components';
// import { provider } from 'styles';

const Header: any = {};

Header.Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.25rem;
  background-color: rgba(255,255,255,0.7);
  z-index: 2;
  backdrop-filter: saturate(180%) blur(20px);
  box-shadow: 0 0 18px rgba(0,0,0,0.05);
`;

Header.Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

Header.Link = styled.a`
  font-weight: 400;
  margin-right: 2rem;
`;

export default Header;
