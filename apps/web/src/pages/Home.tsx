import React from 'react';
import { HomeContainer } from './home.styles';
import { Button } from '../components';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Props {}

export function HomePage({}: Props): React.ReactElement {
  return (
    <HomeContainer color="default">
      <header>
        <h1>Welcome</h1>
        <p className="desc">
          This a website for practicing user authentication with node.js,
          express.js, passport.js and sessions. This web is built with React and
          TypeScript and the API is built using TypeScript and Express.js.{' '}
        </p>
        <div className="cta-section">
          <Button handleClick={() => (window.location.href = '/login')}>
            Login
          </Button>
          <Button
            secondary
            handleClick={() =>
              window.open(
                'https://github.com/temujins/auth-session-jwt-passport',
              )
            }
          >
            Repo <FaGithub />
          </Button>
        </div>
      </header>
      <main>
        <section className="icons-section"></section>
      </main>
    </HomeContainer>
  );
}
