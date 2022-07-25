import React, { FC } from 'react';

import { Icon as ReactIcon } from '@iconify/react';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface IAlertProps {
  title: string;
  description?: string;
  className?: string;
  /**
   * @default 'success'
   */
  variant?: 'success' | 'warning' | 'info' | 'danger';
  action?: 'approve' | 'retry' | 'accept';
  cancelText?: string;
  confirmText?: string;
  onClose?: () => any;
  onConfirm?: () => any;
}

const Alert: FC<IAlertProps> = ({
  title,
  description,
  className,
  variant = 'success',
  onClose,
  onConfirm,
  action,
  cancelText,
  confirmText,
}) => {
  const newCancelText = cancelText || 'Cancel';
  const actionText =
    confirmText ||
    (action === 'approve' && 'Approve') ||
    (action === 'retry' && 'Retry') ||
    (action === 'accept' && 'Accept');
  return (
    <div
      className={clsx(styles.alert, className, {
        [styles.success]: variant === 'success',
        [styles.warning]: variant === 'warning',
        [styles.info]: variant === 'info',
        [styles.danger]: variant === 'danger',
      })}
    >
      <div className={styles.content}>
        {variant === 'success' && (
          <ReactIcon className={styles.icon} icon="bi:check-circle-fill" />
        )}
        {variant === 'warning' && (
          <ReactIcon className={styles.icon} icon="ep:warning-filled" />
        )}
        {variant === 'info' && (
          <ReactIcon className={styles.icon} icon="akar-icons:info-fill" />
        )}
        {variant === 'danger' && (
          <ReactIcon className={styles.icon} icon="ep:circle-close-filled" />
        )}

        <div className={styles.contentInner}>
          <p className={styles.title}>{title}</p>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        {!action && (
          <ReactIcon
            onClick={onClose}
            className={styles.close}
            icon="clarity:window-close-line"
          />
        )}
        {action && (
          <div className={styles.action}>
            <p className={styles.cancel} onClick={onClose}>
              {newCancelText}
            </p>
            <p className={styles.confirm} onClick={onConfirm}>
              {actionText}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Alert;
