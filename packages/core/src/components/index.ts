import {
  Checkbox,
  Input as DefaultInput,
  Password,
  Radio,
  Switch,
} from './base';
import { Digits, Search } from './compose';

export const Input = Object.assign(DefaultInput, {
  Password,
  Search,
  Digits,
  Checkbox,
  Radio,
  Switch,
});

export type {
  IAvatarProps,
  IBreadcrumbsProps,
  IButtonProps,
  ICalendarProps,
  IChipProps,
  ICheckboxProps,
  IInputProps,
  IInputPasswordProps,
  IRadioProps,
  IStepsBarProps,
  IStepsRadialProps,
  ISwitchProps,
} from './base';
export { Avatar, Breadcrumbs, Button, Calendar, Chip, Steps } from './base';

export type { IInputDigitsProps, IInputSearchProps } from './compose';
