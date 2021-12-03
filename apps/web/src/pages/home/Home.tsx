import React from 'react';
import { HomeContainer, MainSection, Button } from './home.styles';
import { IconsPreview } from '../../components';
import { FaGithub } from 'react-icons/fa';

interface Props {}

export function HomePage({}: Props): React.ReactElement {
  return (
    <HomeContainer color="default">
      <header>
        <h1>Welcome</h1>
        <p className="desc">
          This a website for practicing user authentication with node.js, express.js, passport.js
          and sessions. This web is built with React and TypeScript and the API is built using
          TypeScript and Express.js.{' '}
        </p>
        <div className="cta-section">
          <Button onClick={() => (window.location.href = '/login')}>Login</Button>
          <Button
            secondary
            onClick={() => window.open('https://github.com/temujins/auth-session-jwt-passport')}
          >
            Repo <FaGithub />
          </Button>
        </div>
      </header>
      <MainSection color="default">
        <IconsPreview />
      </MainSection>
    </HomeContainer>
  );
}
