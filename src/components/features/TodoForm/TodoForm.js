import React from 'react';
import { PropTypes } from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button,
Form, FormGroup, Input } from 'reactstrap';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  hideModal = () => {
    const { hideForm } = this.props;
    hideForm();
  }

  changeNameHandler = (event) => {
    this.setState({
      name: event.target.value
    })
//DEBUG
//console.log(this.state);
  }

  saveListHandler = () => {
//DEBUG
//console.log(this.state);
    const { saveList } = this.props;
    saveList(this.state.name);
  }

  render() {
    const { modalVisibility, formVisibility, messageVisibility, message } = this.props;
    let modalBody = null;

    if(formVisibility) {
      modalBody = <FormGroup>
        <Input type="text" name="listName" placeholder="Nazwa listy" value={this.state.name} onChange={this.changeNameHandler} />
      </FormGroup>;
    }

    if(messageVisibility) {
      modalBody = <p className={message.className}>{message.text}</p>;
    }

    return (
      <Form>
        <Modal isOpen={modalVisibility} toggle={this.hideModal}>
          <ModalHeader toggle={this.hideModal}>Nowa lista</ModalHeader>
          <ModalBody>
            {modalBody}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveListHandler}>Zapisz</Button>
            <Button color="secondary" onClick={this.hideModal}>Zamknij</Button>
          </ModalFooter>
        </Modal>
      </Form>
    );
  }

};

export default TodoForm;
