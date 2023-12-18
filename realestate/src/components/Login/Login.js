import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { useForm } from '../../hooks/useForm';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css'

export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext)
  const { values, changeHandler, onSubmit } = useForm({
    email: '',
    password: '',
  }, onLoginSubmit)



  return (
    <Form method="POST" onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className={styles.inputField} value={values.email} onChange={changeHandler} name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control className={styles.inputField} value={values.password} onChange={changeHandler} name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}