import styled, { css } from 'styled-components';
import { View } from "./Text";
import { provider } from 'styles';

const Text: any = {};

Text.Root = styled.div<{ view: View }>`
  text-transform: inherit;
  display: inline-block;
  ${props => props.view === 'h1' && css`
    font-size: 3.5rem;
    font-weight: 900;
    color: ${provider.color.aquamarineHeading};
  `}
`;

export default Text;
