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
import '../Modals.css';

class UpdatePasswordModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      originalPassword: "",
      updatedPassword: "",
      confirmedPassword: "",
      response: ""
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal,
      response: ""
    });
  };

  validatePassword = (updated, confirmed) => {
    return updated === confirmed;
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const updated = this.state.updatedPassword;
    const confirmed = this.state.confirmedPassword;

    if (this.validatePassword(updated, confirmed)) {
      const password = {
        originalPassword : this.state.originalPassword,
        updatedPassword : this.state.updatedPassword,
      };
      // Make async call to backend to update user details.
      this.setState({response: "Success"});
    }
    else {
      this.setState({response: "Passwords to not match"});
    }
    
    // Proper validation should be done in real time with a composable structure.
    // Validate proper password parameters, special characters etc etc. 
  };

  render() {
    return (
      <React.Fragment>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Change password
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Change password</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                Original password:
                <Input
                    type="password"
                    name="originalPassword"
                    id="originalPassword"
                    onChange={this.onChange}
                    minLength="6"
                    required
                  />
                  New password: 
                  <Input
                    type="password"
                    name="updatedPassword"
                    id="updatedPassword"
                    onChange={this.onChange}
                    minLength="6"
                    required
                  />
                  Confirm new password: 
                  <Input
                    type="password"
                    name="confirmedPassword"
                    id="confirmedPassword"
                    onChange={this.onChange}
                    minLength="6"
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

export default UpdatePasswordModal;

