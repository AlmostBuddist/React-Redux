import React, { FC, useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from '../../redux/slices/counterSlice';
import { Button, Input } from '../shared';
import { StyledAsyncButton, StyledRow, StyledValue } from './counter.style';

const Counter: FC = () => {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <>
      <StyledRow>
        <Button
          ariaAttributes={{
            'aria-label': 'Decrement value',
          }}
          handleClick={() => dispatch(decrement())}
          text="-"
        />
        <StyledValue>{count}</StyledValue>
        <Button
          ariaAttributes={{
            'aria-label': 'Increment value',
          }}
          handleClick={() => dispatch(increment())}
          text="+"
        />
      </StyledRow>
      <StyledRow>
        <Input
          ariaAttributes={{
            'aria-label': 'Set increment amount',
          }}
          value={incrementAmount}
          handleChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button
          handleClick={() => dispatch(incrementByAmount(incrementValue))}
          text="Add Amount"
        />
        <StyledAsyncButton
          handleClick={() => dispatch(incrementAsync(incrementValue))}
          text="Add Async"
        />
        <Button
          handleClick={() => dispatch(incrementIfOdd(incrementValue))}
          text="Add If Odd"
        />
      </StyledRow>
    </>
  );
};

export default Counter;
