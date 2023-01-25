import React from 'react';
import { Link as RouterLink, LinkProps, generatePath } from 'react-router-dom';
import { styles } from './link.css';

type GenericObject = {
  [key: string]: string | number;
};

type CustomLinkProps = Omit<LinkProps, 'to'> & {
  route: string;
  params?: GenericObject;
};

function Link({ children, className, route, params = {}, ...restProps }: CustomLinkProps) {
  const to = generatePath(route, params);
  return (
    <RouterLink to={to} {...restProps} className={`${styles.link} ${className || ''}`}>
      {children}
    </RouterLink>
  );
}

export { Link };
