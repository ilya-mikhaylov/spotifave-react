import * as React from 'react';
import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import { UserDataState } from '../../reducers/user-data.reducer';

interface Props {
  userData: UserDataState;
  fetchUserData: () => void;
}

export const NavbarComponent: React.FunctionComponent<Props> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Spotifave</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {props.userData.user ? (
              <>
                <NavItem>
                  <NavLink href="#">Profile</NavLink>
                </NavItem>
              </>
            ) : null}
            <NavItem>
              <NavLink href="https://github.com/ilya-mikhaylov/spotifave-react">GitHub</NavLink>
            </NavItem>
            {props.userData.user ? (
              <>
                <NavItem>
                  <NavLink href="/logout">Logout</NavLink>
                </NavItem>
              </>
            ) : null}

          </Nav>
          {props.userData.user ? (
            <>
              <NavbarText>
                {props.userData.user.display_name}
              </NavbarText>
            </>
          ) : null}

        </Collapse>
      </Navbar>
    </div>
  );
};
