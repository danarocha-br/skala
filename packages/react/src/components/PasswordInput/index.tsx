import { CSS } from '../../styles';

import { Box } from '../Box';
import { Stack } from '../Stack';
import { Icon, iconPath } from '../Icon';

import * as S from './styles';
import { useCallback, useState } from 'react';
import { TextInput } from '../TextInput';

export type PasswordInputProps = {
  name: string;
  label: string;
  placeholder?: string;
  icon?: keyof typeof iconPath;
  value: string;
  css?: CSS;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'>;

export const PasswordInput = ({
  name,
  label,
  placeholder,
  icon,
  css,
  value,
  ...props
}: PasswordInputProps): JSX.Element => {
  const [isVisible, setVisible] = useState(false);
  const [isHovered, setHover] = useState(false);

  const handleTooglePasswordMask = useCallback(() => {
    setVisible(!isVisible);
  }, [isVisible]);

  const handleHover = useCallback(() => {
    setHover(true);
  }, []);

  const handleUnhover = useCallback(() => {
    setHover(false);
  }, []);

  return (
    <Stack
      align="center"
      justify="end"
      fullWidth
      css={{ position: 'relative', h: 64, css }}
      {...props}
    >
      <Box
        css={{ position: 'relative', w: '100%' }}
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
      >
        <TextInput
          id={name}
          name={name}
          label={label}
          placeholder={placeholder}
          icon={icon}
          type={isVisible ? 'text' : 'password'}
          value={value}
          {...props}
        />
      </Box>

      <S.Button
        aria-label="view password"
        type="button"
        onClick={handleTooglePasswordMask}
      >
        <Icon
          label="view password"
          name={`${isVisible ? 'hide' : 'eye'}`}
          size="sm"
          color={`${isHovered ? 'on-dark' : 'body'}`}
          className="input__icon--password"
        />
      </S.Button>
    </Stack>
  );
};

PasswordInput.displayName = 'PasswordInput';
