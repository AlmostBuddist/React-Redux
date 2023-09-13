import { TStartsWithAria } from '../../../../common/types';

export interface IInput {
  handleChange:
    | (() => void)
    | ((e: React.ChangeEvent<HTMLInputElement>) => void);
  value: string;
  ariaAttributes?: Record<TStartsWithAria, string>;
}
