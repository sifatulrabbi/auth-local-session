import React from 'react';
import { StyledButton } from './button.styles';

interface Props {
  label: string;
  id?: string;
  classes?: string;
  handleClick?: (...args: any[]) => any;
  secondary?: boolean;
}

export function Button({
  label,
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
      {label}
    </StyledButton>
  );
}
