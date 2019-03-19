import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => {
  return (
    <NavStyles>
      <Link href="/">
        <a>Items</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/">
        <a>Signup</a>
      </Link>
      <Link href="/">
        <a>Orders</a>
      </Link>
      <Link href="/">
        <a>Account</a>
      </Link>
    </NavStyles>
  );
};

export default Nav;
