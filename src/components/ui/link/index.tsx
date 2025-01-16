import { type VariantProps, cva } from 'class-variance-authority';
import classnames from 'classnames';
import NextLink from 'next/link';
import * as React from 'react';

import styles from './link.module.scss';

const linkVariants = cva('link', {
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  variants: {
    size: {
      default: styles.linkResponsive,
    },
    variant: {
      default: styles.linkAccent,
    },
  },
});

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  isLocal?: boolean;
  href: string;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ isLocal = false, className, size, variant, href, children, ...props }) => {
    const Comp = isLocal ? NextLink : 'a';
    return (
      <Comp
        className={classnames(linkVariants({ className, size, variant }))}
        href={href}
        {...props}
      >
        <span>{children}</span>
      </Comp>
    );
  },
);
Link.displayName = 'Link';

export { Link, linkVariants };
