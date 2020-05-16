import * as React from 'react';
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

interface Props {
  userData: object;
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
            <NavItem>
              <NavLink href="#">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/ilya-mikhaylov/spotifave-react">GitHub</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>
            some text
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};
