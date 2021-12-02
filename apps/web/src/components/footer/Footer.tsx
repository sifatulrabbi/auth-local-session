import React from 'react';
import { Link } from 'react-router-dom';
import { StyledFooter } from './footer.styles';

export function Footer(): React.ReactElement {
  return (
    <StyledFooter>
      <ul className="footer-links">
        <li>
          <Link to="https://github.com/temujins">GitHub</Link>
        </li>
        <li>
          <Link to="https://facebook.com/ttemujinRabbi">Facebook</Link>
        </li>
        <li>
          <Link to="https://twitter.com/sifatul_rabbi">Twitter</Link>
        </li>
        <li>
          <Link to="https://linkedin.com/in/temujin">LinkedIn</Link>
        </li>
      </ul>
    </StyledFooter>
  );
}
