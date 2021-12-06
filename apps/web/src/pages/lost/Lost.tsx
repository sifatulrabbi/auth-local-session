import React from 'react';
import { Link } from 'react-router-dom';
import { LostContainer, Button } from './lost.styles';

export function LostPage(): React.ReactElement {
  return (
    <LostContainer color="default">
      <h1>You're lost</h1>
      <Link to="/">
        <Button>Go to home</Button>
      </Link>
    </LostContainer>
  );
}
