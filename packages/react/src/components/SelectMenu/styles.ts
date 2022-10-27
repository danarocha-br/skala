import { styled } from '../../styles';
import {
  SelectTrigger,
  ScrollUpButton,
  ScrollDownButton,
  Content,
  Viewport,
  Item,
  Label,
  Separator,
  ItemIndicator,
  Root,
  Value,
  Icon,
  Group,
  ItemText,
  Portal,
} from '@radix-ui/react-select';

export const SelectBox = styled(SelectTrigger, {
  all: 'unset',
  fontFamily: '$sans',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  padding: '0 $2',
  fontSize: '$sm',
  height: 40,
  gap: '$2',
  backgroundColor: 'transparent',
  color: '$text-body',
  position: 'relative',
  transition: '$base',
  border: '1px solid transparent',

  '&:hover': {
    bg: '$surface-action-transparent-disabled',
  },
  '&:focus': {
    bg: '$surface-action-transparent-disabled',
    border: '1px dashed $surface-base-hover',
  },
});

export const SelectContent = styled(Content, {
  overflow: 'hidden',
  backgroundColor: '$surface-base-subdued',
  borderRadius: '$md',
  boxShadow: '$low',
});

export const SelectViewport = styled(Viewport, {
  padding: '$2',
  fontFamily: '$sans',
});

export const SelectItem = styled(Item, {
  all: 'unset',
  fontSize: '$sm',
  color: '$text-body',
  borderRadius: '$sm',
  display: 'flex',
  alignItems: 'center',
  height: '$5',
  padding: '0 8px 0 32px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$text-subtext',
    cursor: 'not-allowed',
  },

  '&:focus': {
    backgroundColor: '$surface-interactive-subdued',
    color: '$text-on-interactive',

    '> svg': {
      color: '$text-on-interactive',
    },
  },
});

export const SelectLabel = styled(Label, {
  padding: '0 24px',
  fontSize: '$xs',
  color: '$text-body',
});

export const SelectSeparator = styled(Separator, {
  height: 1,
  backgroundColor: '$form-border',
  margin: 5,
});

export const SelectItemIndicator = styled(ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 24,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$text-body',
  cursor: 'default',
};

export const SelectScrollUpButton = styled(ScrollUpButton, scrollButtonStyles);

export const SelectScrollDownButton = styled(
  ScrollDownButton,
  scrollButtonStyles
);

export const SelectItemText = styled(ItemText, {
  d: 'flex',
  gap: '$1',
  alignItems: 'center',
});

export const SelectRoot = Root;
export const SelectValue = Value;
export const SelectIcon = Icon;
export const SelectGroup = Group;
export const SelectPortal = Portal;
