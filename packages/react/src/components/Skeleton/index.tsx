import ReactSkeleton, {
  SkeletonTheme,
  SkeletonProps,
} from 'react-loading-skeleton';
import { theme } from '../../styles';

export type SkeletonOwnProps = {
  children: React.ReactNode;
};

const SkeletonItem = (props: SkeletonProps) => <ReactSkeleton {...props} />;
SkeletonItem.displayName = 'Skeleton.Item';

const SkeletonRoot = ({ children, ...props }: SkeletonOwnProps) => (
  <SkeletonTheme
    //@ts-ignore
    baseColor={theme.colors['loading-default']}
    //@ts-ignore
    highlightColor={theme.colors['loading-subdued']}
    borderRadius="999px"
    {...props}
  >
    {children}
  </SkeletonTheme>
);
SkeletonRoot.displayName = 'Skeleton.Root';

export const Skeleton = { Root: SkeletonRoot, Item: SkeletonItem };
