import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Nav, NavItem, Button } from 'reactstrap';
import { FaPlus } from 'react-icons/fa';

class MainMenu extends React.Component {

  newListHandler = () => {
    const { showTodoForm } = this.props;
    showTodoForm();
  }

  render() {
    const { location } = this.props;

    const links = [
      { action: this.newListHandler, title: 'Nowa lista', icon: <FaPlus /> },
    ];

    return (
      <Nav className="main-menu ml-auto" navbar>
        { links.map((item, index) =>
          <NavItem key={index} className={(item.path === location.pathname) ? 'active' : ''}>
            <Button outline color="primary" onClick={item.action} title={item.title}>{item.icon} <span className="d-none d-lg-inline-block">{item.title}</span></Button>{' '}
          </NavItem>
        )}
      </Nav>
    );
  }
}

MainMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
  })),
};

export default withRouter(props => <MainMenu {...props}/>);
