import {
  Checkbox,
  Input as DefaultInput,
  Password,
  Radio,
  Switch,
} from './base';
import { Crypto, Digits, Search } from './compose';

export const Input = Object.assign(DefaultInput, {
  Password,
  Search,
  Digits,
  Checkbox,
  Radio,
  Switch,
  Crypto,
});

export type {
  IAvatarProps,
  IBreadcrumbsProps,
  IButtonProps,
  ICalendarProps,
  IChipProps,
  IAlertProps,
  ICheckboxProps,
  IInputProps,
  IInputPasswordProps,
  IRadioProps,
  IStepsBarProps,
  IStepsRadialProps,
  ISwitchProps,
} from './base';
export {
  Avatar,
  Breadcrumbs,
  Button,
  Calendar,
  Chip,
  Steps,
  Alert,
} from './base';

export type {
  IInputCryptoProps,
  IInputDigitsProps,
  IInputSearchProps,
} from './compose';
