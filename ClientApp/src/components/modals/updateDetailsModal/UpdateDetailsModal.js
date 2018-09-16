import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';
import PropTypes from 'prop-types';
import './updateDetailsModal.css';

class UpdateDetailsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      firstname: "",
      lastName: "",
      emailAddress: "",
      response: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      response: ""
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    // Check that there are no validation errors
    // firstname / lastname meet required length, are not empty, contain no special characters etc.

    e.preventDefault();

    const {firstName, lastName, emailAddress} = this.state;

    const updatedUser = {
      firstName,
      lastName,
      emailAddress,
    };
    
    // Make async call to backend to update user details.

    // If success, display sucess and close modal
    // If failure, display error message.
    this.setState({response: "Success"});
    this.props.setUserAccount(updatedUser);
  };

  render() {
    return (
      <React.Fragment>
        <Button
          color="dark"
          style={{ marginRight: '1rem', marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Update details
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update User Details</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                First name:
                <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={this.onChange}
                    minLength="1"
                    maxLength="50"
                    required
                  />
                  Last name: 
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={this.onChange}
                    minLength="1"
                    maxLength="50"
                    required
                  />
                  Email Address: 
                  <Input
                    type="email"
                    name="emailAddress"
                    id="emailAddress"
                    onChange={this.onChange}
                    minLength="1"
                    maxLength="50"
                    required
                  />
                {this.state.response && <p className="response">{this.state.response}</p>}
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Update
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

UpdateDetailsModal.propTypes = {
  user: PropTypes.object.isRequired, //eslint-disable-line
  setUserAccount: PropTypes.func.isRequired
};

export default UpdateDetailsModal;

