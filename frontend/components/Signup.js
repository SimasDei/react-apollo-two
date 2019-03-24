import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

export class Signup extends Component {
  render() {
    return (
      <Form>
        <fieldset>
          <h2>Create an Account</h2>
        </fieldset>
      </Form>
    );
  }
}

export default Signup;
