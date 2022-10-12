export type TextProps = {
  children: string;
};

export const Text = ({ children }: TextProps) => {
  return <span>{children}</span>;
};
