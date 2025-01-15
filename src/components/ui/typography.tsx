import classnames from 'classnames';
import type { FC, ReactNode } from 'react';

type Tag = 'div' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'li';
type Variant = 'title1' | 'title2' | 'title3' | 'text1' | 'text2';

interface TypographyProps {
  tag?: Tag;
  variant: Variant;
  children: ReactNode;
  className?: string;
}

export const Typography: FC<TypographyProps> = ({ tag = 'div', variant, children, className }) => {
  const Component = tag;
  return <Component className={classnames(variant, className)}>{children}</Component>;
};
