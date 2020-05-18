import * as React from 'react';
import { NavbarContainer } from '../Navbar';

interface Props {
  className?: string
}

export const LayoutComponent: React.SFC<Props> = ({ children }) => (
  <>
    <NavbarContainer />
    {children}
  </>
);
