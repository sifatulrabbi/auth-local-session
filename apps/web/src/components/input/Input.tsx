import React from 'react';
import { StyledInput } from './input.styles';

interface Props {
  id: string;
  type: 'text' | 'password' | 'email' | 'number';
  name: string;
  classes?: string;
  placeholder?: string;
}

export function Input({
  id,
  type,
  name,
  classes,
  placeholder,
}: Props): React.ReactElement {
  return (
    <StyledInput
      type={type}
      id={id}
      name={name}
      className={classes}
      placeholder={placeholder}
    />
  );
}
