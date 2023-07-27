import {
  bounceInRight,
  zoomOut
} from 'react-animations';
import { keyframes, styled } from 'styled-components';

const AnimationIn = keyframes`${bounceInRight}`;
const AnimationOut = keyframes`${zoomOut}`;

export const AnimatedIn = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  animation: ${AnimationIn} 1.8s forwards;
`;

export const AnimatedOut = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  animation: ${AnimationOut} 1.8s forwards;
`;
