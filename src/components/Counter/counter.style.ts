import styled from 'styled-components';

import { Button } from '../shared';

export const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  & > button {
    margin-left: 4px;
    margin-right: 8px;
  }
`;

export const StyledValue = styled.span`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: 'Courier New', Courier, monospace;
`;

export const StyledAsyncButton = styled(Button)`
  position: relative;

  &:after {
    content: '';
    background-color: rgba(112, 76, 182, 0.15);
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    opacity: 0;
    transition: width 1s linear, opacity 0.5s ease 1s;
  }

  :active:after {
    width: 0%;
    opacity: 1;
    transition: 0s;
  }
`;
