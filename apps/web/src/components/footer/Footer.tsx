import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from './footer.styles';

export function Footer(): React.ReactElement {
  return (
    <StyledFooter>
      <header>
        <span>
          Built by{' '}
          <Link to="https://github.com/temujins" target="_blank">
            Sifatul Rabbi
          </Link>
        </span>
      </header>
      <ul className="links-list">
        <li>
          <Link to="https://github.com/temujins" target="_blank">
            GitHub
          </Link>
        </li>
        <li>
          <Link to="https://facebook.com/ttemujinRabbi" target="_blank">
            Facebook
          </Link>
        </li>
        <li>
          <Link to="https://twitter.com/sifatul_rabbi" target="_blank">
            Twitter
          </Link>
        </li>
        <li>
          <Link to="https://linkedin.com/in/temujin" target="_blank">
            LinkedIn
          </Link>
        </li>
      </ul>
    </StyledFooter>
  );
}
