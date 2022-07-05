import React, { FC, ReactNode, useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@forward-protocol/ui-icons';
import clsx from 'clsx';
import { format, isSameDay } from 'date-fns';
import ReactCalendar, { CalendarProps } from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

import styles from './index.module.scss';

export interface ICalendarProps extends Omit<CalendarProps, 'onChange'> {
  onChange?: (value: CalendarProps['value']) => void;
  onSubmit?: (value: CalendarProps['value']) => void;
  footer?: ReactNode;
}

const Calendar: FC<ICalendarProps> = ({
  footer,
  onSubmit,
  onChange,
  selectRange,
  showDoubleView,
  showFixedNumberOfWeeks = true,
  next2Label = null,
  prev2Label = null,
  nextLabel = <ChevronRightIcon size="M" />,
  prevLabel = <ChevronLeftIcon size="M" />,
  className,
  ...props
}) => {
  const [selectedDay, setSelectedDay] = useState<CalendarProps['value']>();

  const isAllOnToday = (dates: Date[]) => {
    const now = new Date();
    return dates.every((date) => isSameDay(date, now));
  };

  const displayDate = () => {
    const now = new Date();

    if (selectedDay instanceof Date) {
      if (isSameDay(selectedDay, now)) return 'Now';
      return formatDate(selectedDay);
    }
    if (selectedDay?.[0] && selectedDay?.[1]) {
      if (isAllOnToday([selectedDay[0], selectedDay[1]])) return 'Now';
      return `${formatDate(selectedDay[0])} – ${formatDate(selectedDay[1])}`;
    }
    return 'Now';
  };

  const formatDate = (date: Date) => {
    return format(date, 'MMM do yyyy');
  };

  return (
    <div className={styles.container}>
      <ReactCalendar
        className={clsx(styles.calendar, className)}
        showFixedNumberOfWeeks={showFixedNumberOfWeeks}
        next2Label={next2Label}
        nextLabel={nextLabel}
        prev2Label={prev2Label}
        prevLabel={prevLabel}
        showDoubleView={showDoubleView}
        selectRange={showDoubleView || selectRange}
        value={selectedDay}
        onChange={(value: CalendarProps['value']) => {
          if (onChange) onChange(value);
          setSelectedDay(value);
        }}
        {...props}
      />
      {footer ?? (
        <div className={styles.footer}>
          <span className={styles.date}>{displayDate()}</span>
          <span className={styles.button_group}>
            {selectedDay && (
              <button
                type="button"
                className={styles.reset_btn}
                onClick={() => {
                  setSelectedDay(null);
                }}
              >
                Reset
              </button>
            )}
            <button
              type="submit"
              className={styles.select_btn}
              onClick={() => {
                if (onSubmit) onSubmit(selectedDay);
              }}
            >
              Select
            </button>
          </span>
        </div>
      )}
    </div>
  );
};

export default Calendar;
