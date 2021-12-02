import React from 'react';
import { StyledButton } from './button.styles';

interface Props {
  id?: string;
  classes?: string;
  handleClick?: (...args: any[]) => any;
  secondary?: boolean;
  children: React.ReactNode;
}

export function Button({
  children,
  id,
  classes,
  secondary,
  handleClick,
}: Props): React.ReactElement {
  return (
    <StyledButton
      id={id}
      className={classes}
      onClick={handleClick}
      secondary={secondary}
    >
      {children}
    </StyledButton>
  );
}
