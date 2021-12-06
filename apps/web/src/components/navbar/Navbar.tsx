import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { StyledNav, NavMenu, ToggleMenuBtn } from './navbar.styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuthContext } from '../../contexts';

export function Navbar(): React.ReactElement {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const { auth, user } = useAuthContext();

  function toggleShowMenu(close?: boolean): void {
    if (close) {
      setShowMenu(!close);
    } else {
      setShowMenu((prev) => !prev);
    }
  }

  return (
    <StyledNav>
      <div className="logo">
        <Link to="/">API</Link>
      </div>
      <ToggleMenuBtn onClick={() => toggleShowMenu()}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </ToggleMenuBtn>
      <NavMenu show={showMenu}>
        <li>
          <Link to="/" onClick={() => toggleShowMenu(true)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/login" onClick={() => toggleShowMenu(true)}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/sign-up" onClick={() => toggleShowMenu(true)}>
            Sign up
          </Link>
        </li>
        {auth && (
          <li>
            <Link to={`/users/${user?._id}`} onClick={() => toggleShowMenu(true)}>
              Profile
            </Link>
          </li>
        )}
      </NavMenu>
    </StyledNav>
  );
}
