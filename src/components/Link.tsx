import * as React from 'react';
import {
  Link as LinkRouter,
  LinkProps as LinkRouterProps,
} from 'react-router-dom';

import LinkMaterial, {
  LinkProps as LinkMaterialProps,
} from '@mui/material/Link';

interface Props {
  router?: Omit<LinkRouterProps, 'to' | 'children'>;
  material?: Omit<LinkMaterialProps, 'href' | 'children' | 'component'>;
  children: React.ReactNode;
  to: string;
}

const MyLink: React.FC<Props> = ({ to, children, router, material }: Props) => {
  return (
    <LinkRouter to={to} {...router}>
      <LinkMaterial component="span" {...material}>
        {children}
      </LinkMaterial>
    </LinkRouter>
  );
};

export default MyLink;
