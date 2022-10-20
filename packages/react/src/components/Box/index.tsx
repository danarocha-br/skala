import type * as Stitches from '@stitches/react';
import { styled } from '../../styles';

export type BoxProps = Stitches.VariantProps<typeof Box>;

export const Box = styled('div', {
  boxSizing: 'border-box',
});
