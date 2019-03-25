import React from 'react';
import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => {
  return (
    <User>
      {({ data: { me } }) => (
        <NavStyles>
          <Link href="/items">
            <a>Shop</a>
          </Link>
          {me && (
            <React.Fragment>
              <Link href="/sell">
                <a>Sell</a>
              </Link>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
              <Link href="/account">
                <a>Account</a>
              </Link>
              <Signout />
            </React.Fragment>
          )}
          {!me && (
            <Link href="/signup">
              <a>Signup/in</a>
            </Link>
          )}
        </NavStyles>
      )}
    </User>
  );
};

export default Nav;
