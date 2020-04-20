import styled from 'styled-components';
// import { provider } from 'styles';

const Loader: any = {};

Loader.Root = styled.div`
  height: 18px;
  width: 18px;
  border: 1px solid black;
  @keyframes loaderAnimation {
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
  animation: loaderAnimation 1.5s linear infinite;
`;

export default Loader;
