import Checkbox, { ICheckboxProps } from './Checkbox';
import Digits, { IInputDigitsProps } from './Digits';
import Default, { IInputProps } from './Input';
import Password, { IInputPasswordProps } from './Password';
import Radio, { IRadioProps } from './Radio';
import Search, { IInputSearchProps } from './Search';
import Switch, { ISwitchProps } from './Switch';

const Input = Object.assign(Default, {
  Password,
  Search,
  Digits,
  Checkbox,
  Radio,
  Switch,
});

export type {
  ICheckboxProps,
  IInputDigitsProps,
  IInputPasswordProps,
  IInputProps,
  IRadioProps,
  IInputSearchProps,
  ISwitchProps,
};
export default Input;
