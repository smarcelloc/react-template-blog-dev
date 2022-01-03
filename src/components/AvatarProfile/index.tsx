import * as React from 'react';

import { styled, Theme } from '@mui/material';
import Avatar, { AvatarProps } from '@mui/material/Avatar';

import { UserProps } from '../../entities';
import stringToColor from './stringToColor';

interface PropsAvatarStyled extends AvatarProps {
  size?: 'small' | 'large';
  bgcolor?: string;
}

interface Props extends Omit<PropsAvatarStyled, 'bgcolor'> {
  user?: Pick<UserProps, 'name' | 'avatar'>;
}

const avatarSize = (size: string | undefined, theme: Theme) => {
  switch (size) {
    case 'small':
      return theme.spacing(3);
    case 'large':
      return theme.spacing(12);
    default:
      return 'none';
  }
};

const MyAvatar = styled(Avatar)<PropsAvatarStyled>(
  ({ theme, size, bgcolor }) => ({
    height: avatarSize(size, theme),
    width: avatarSize(size, theme),
    background: bgcolor,
  })
);

const AvatarProfile: React.FC<Props> = ({ user, src, ...rest }: Props) => {
  if (user?.avatar) {
    return <MyAvatar src={user.avatar} {...rest} />;
  }

  if (user?.name) {
    const firstName = user.name.split(' ')[0];

    return (
      <MyAvatar {...rest} bgcolor={stringToColor(firstName)}>
        {`${firstName[0].toUpperCase()}`}
      </MyAvatar>
    );
  }

  return <MyAvatar {...rest} />;
};

export default AvatarProfile;
