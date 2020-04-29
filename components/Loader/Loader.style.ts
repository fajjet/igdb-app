import styled from 'styled-components';
import { provider } from 'styles';

const Loader: any = {};

Loader.Root = styled.div`
  height: 18px;
  width: 18px;
  border: 1px solid ${provider.color.aquamarine};
  box-shadow: 
    0 0 3px ${provider.color.aquamarine},
    0 0 10px ${provider.color.aquamarine},
    0 0 15px ${provider.color.aquamarine}
  ;
  
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
