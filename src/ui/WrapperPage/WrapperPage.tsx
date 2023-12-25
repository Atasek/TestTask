import React, { FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './WrapperPage.module.scss';

interface IWrapperPageProps extends HTMLAttributes<HTMLDivElement> {
  id: string;
}

export const WrapperPage: FC<IWrapperPageProps> = ({
  id,
  className,
  children,
  ...props
}) => (
  <section
    id={id}
    className={classNames(styles.container, className)}
    {...props}
  >
    {children}
  </section>
);
