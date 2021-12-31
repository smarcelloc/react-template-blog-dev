import * as React from 'react';

import { Slide, SlideProps, useScrollTrigger } from '@mui/material';

interface Props extends Omit<SlideProps, 'in'> {
  window?: () => Window;
}

const HideOnScroll: React.FC<Props> = ({ window, ...rest }: Props) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return <Slide {...rest} in={!trigger} />;
};

export default HideOnScroll;
