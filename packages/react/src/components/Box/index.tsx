import {VariantProps} from '@stitches/react';
import { styled } from '../../styles';

export type BoxProps = VariantProps<typeof Box>;

export const Box = styled('div', {
  boxSizing: 'border-box',
});
