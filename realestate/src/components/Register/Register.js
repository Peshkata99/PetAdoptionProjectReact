import { useContext } from 'react';

import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/AuthContext';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext)
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
  }, onRegisterSubmit)
  return (
    <Form method="POST" onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={values.email} onChange={changeHandler} name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={values.password} onChange={changeHandler} name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}