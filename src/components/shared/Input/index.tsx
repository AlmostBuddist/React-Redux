import React, { FC } from 'react';

import StyledInput from './input.style';
import { IInput } from './interfaces';

const Input: FC<IInput> = ({ handleChange, value, ariaAttributes }) => (
  <StyledInput value={value} onChange={handleChange} {...ariaAttributes} />
);

export default Input;
