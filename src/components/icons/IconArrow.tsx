import type { ComponentPropsWithRef, FC } from 'react';

export const IconArrow: FC<ComponentPropsWithRef<'svg'>> = (props) => (
  <svg
    fill='none'
    height='25'
    viewBox='0 0 46 25'
    width='46'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M2 2L23 23L44 2' stroke='#BF9D47' strokeLinecap='square' strokeWidth='2' />
  </svg>
);
