import { CSS } from '../../styles';
import { Avatar } from '../Avatar';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { Text } from '../Text';

import * as S from './styles';

export type UserProfileProps = {
  user_name: string;
  user_email: string;
  user_imageURL: string;
  loading?: boolean;
  children: React.ReactNode;
  css?: CSS;
};

export const UserProfile = ({
  user_name,
  user_email,
  user_imageURL,
  children,
  loading = false,
  css,
  ...props
}: UserProfileProps) => (
  <Dropdown.Menu
    css={css}
    {...props}
    trigger={
      <S.Trigger aria-label="User profile">
        <Avatar
          username={user_name}
          imageURL={user_imageURL && user_imageURL}
          imageALT={user_name && user_name}
          showUsername
          loading={loading}
        />
        <Icon label='dropdown' name="chevronDown" size="sm" />
      </S.Trigger>
    }
  >
    <Text
      size="sm"
      color="caption"
      css={{
        py: '$2',
        px: '$3',
        mb: -8,
        backgroundColor: '$surface-base-disabled',
        borderTopLeftRadius: '$sm',
        borderTopRightRadius: '$sm',
      }}
    >
      {user_email && user_email}
    </Text>
    <Dropdown.Separator css={{mb: '$2'}} />
    {children}
  </Dropdown.Menu>
);
