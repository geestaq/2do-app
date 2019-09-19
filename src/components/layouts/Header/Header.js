import React from 'react';
import MainMenu from '../../common/MainMenu/MainMenu';
import { Navbar, NavbarBrand, NavbarToggler, Collapse } from 'reactstrap';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">2do App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <MainMenu />
        </Collapse>
      </Navbar>
    );
  }

}

export default Header;
