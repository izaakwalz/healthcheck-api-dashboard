// * eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

const ModalExample = (props) => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color='danger' onClick={toggle}>
        {'login form'}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <Form>
          <ModalBody>
            <FormGroup>
              <Label for='exampleEmail'>Email</Label>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='email'
              />
            </FormGroup>
            <FormGroup>
              <Label for='examplePassword'>Password</Label>
              <Input
                type='password'
                name='password'
                id='examplePassword'
                placeholder='password placeholder'
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={toggle}>
              Test
            </Button>{' '}
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalExample;
