import { Text } from '../Text';

export type ShortcutProps = {
  shortcut: string;
};

export const Shortcut = ({
  shortcut,
  ...props
}: ShortcutProps): JSX.Element => (
  <Text
    size="xs"
    weight="medium"
    css={{
      px: '$1',
      pb: 1,
      bg: '$surface-base-hover',
      borderRadius: '$sm',
      lineHeight: '$2',
      h: 'auto',
    }}
    aria-label={shortcut}
    {...props}
  >
    {shortcut}
  </Text>
);

Shortcut.displayName = 'Shortcut';
