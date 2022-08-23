import React, {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@forward-protocol/ui-icons';
import clsx from 'clsx';
import NumberFormat, { NumberFormatValues } from 'react-number-format';

import { Input } from '../../../base';

import styles from './index.module.scss';

export interface IInputCryptoProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'size' | 'onChange' | 'value' | 'defaultValue' | 'max'
  > {
  className?: string;
  /**
   * L - 40px (desktop) / 48px (mobile)
   *
   * M - 32px (desktop) / 36px (mobile)
   *
   * S - 24px (desktop) / 36px (mobile)
   *
   * @default 'L'
   */
  size?: 'L' | 'M' | 'S';
  /**
   * @default 'crypto'
   */
  currency?: string;
  symbol?: string;
  invalid?: boolean;
  maxValue?: string;
  hasMax?: boolean;
  canChange?: boolean;
  price?: number;
  decimal?: number;
  walletBalance?: number;
  onSelectMax?: () => void;
  onChange?: (value: string) => void;
  onSelectChange?: (isExpanded: boolean) => void;
}

const Crypto = forwardRef<HTMLInputElement | null, IInputCryptoProps>(
  (
    {
      className,
      currency = '$',
      decimal = 2,
      symbol = 'BTC',
      placeholder,
      maxValue,
      hasMax = false,
      canChange = false,
      onSelectChange,
      onSelectMax,
      onChange,
      price = 0.0,
      walletBalance,
      ...props
    },
    ref
  ) => {
    const DEFAULT_PLACEHOLDER = `0.${'0'.repeat(decimal)}`;

    const [value, setValue] = useState<string>('');
    const [isExpanded, setExpanded] = useState<boolean>(false);
    const [isFocused, setIsFocused] = useState<boolean>(false);

    const handleSelectMax = () => {
      setValue(maxValue ?? '');
      if (onSelectMax) onSelectMax();
    };

    const handleSelectChange = () => {
      setExpanded(!isExpanded);
    };

    const handleChange = (values: NumberFormatValues) => {
      setValue(values.value);
    };

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    useEffect(() => {
      if (onSelectChange) onSelectChange(isExpanded);
    }, [isExpanded, onSelectChange]);

    useEffect(() => {
      if (onChange) onChange(value);
    }, [value, onChange]);

    return (
      <NumberFormat
        thousandSeparator=","
        customInput={Input}
        decimalScale={decimal}
        fixedDecimalScale={true}
        allowNegative={false}
        getInputRef={ref}
        value={value}
        onValueChange={handleChange}
        className={clsx(styles.input, className)}
        placeholder={placeholder || DEFAULT_PLACEHOLDER}
        onFocus={handleFocus}
        onBlur={handleBlur}
        bottomAdornment={
          <div className={styles.bottomAdornment}>
            <span>
              {currency}
              {(price || 0).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </span>
            {walletBalance && (
              <div>
                Wallet Balance:{' '}
                <span className={styles.walletBalance}>{walletBalance}</span>
              </div>
            )}
          </div>
        }
        endAdornment={
          <div className={styles.suffix}>
            <div
              className={clsx(styles.symbol, {
                [styles.canChange]: canChange === true,
              })}
            >
              {symbol}
              {canChange && (
                <button
                  type="button"
                  onClick={handleSelectChange}
                  className={styles.change}
                >
                  {isExpanded ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </button>
              )}
            </div>
            {hasMax && (
              <button
                onClick={handleSelectMax}
                type="button"
                className={styles.max}
              >
                MAX
              </button>
            )}
          </div>
        }
        {...props}
      />
    );
  }
);

Crypto.displayName = 'Crypto';

export default Crypto;
