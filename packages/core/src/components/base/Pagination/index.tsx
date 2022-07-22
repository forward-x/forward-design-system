import React, { FC } from 'react';

import { Icon as ReactIcon } from '@iconify/react';
import clsx from 'clsx';
import ReactPaginate from 'react-paginate';

import styles from './index.module.scss';

export interface IPaginationProps {
  total: number;
  initialPage?: number;
  forcePage?: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: FC<IPaginationProps> = ({
  total,
  onPageChange,
  initialPage = 1,
  pageRangeDisplayed = 5,
  forcePage,
  marginPagesDisplayed,
}) => {
  const handlePageClick = ({ selected }: { selected: number }) => {
    onPageChange?.(selected + 1);
  };

  return (
    <ReactPaginate
      forcePage={forcePage && forcePage - 1}
      className={styles.pagination}
      activeLinkClassName={styles.selected}
      activeClassName={styles.selected}
      pageLinkClassName={clsx(styles.link)}
      disabledClassName={styles.disabled}
      containerClassName={'pagination'}
      breakLabel="..."
      nextLabel={<ReactIcon icon="akar-icons:chevron-right" />}
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      pageCount={total}
      previousLabel={<ReactIcon icon="akar-icons:chevron-left" />}
      initialPage={initialPage - 1}
      // renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
