import { CSS } from '../../styles';

import * as S from './styles';

export type FormErrorMessageProps = {
  children: React.ReactNode;
  variant?: 'inside' | 'outside';
  css?: CSS;
};

export const FormErrorMessage: React.FC<FormErrorMessageProps> = ({
  css,
  variant,
  children,
  ...props
}) => (
  <S.Container role="alert" variant={variant} css={css} {...props}>
    {children}
  </S.Container>
);

FormErrorMessage.displayName = 'FormErrorMessage';
