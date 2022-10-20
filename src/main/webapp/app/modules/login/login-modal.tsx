import React from 'react';
import { ValidatedField } from 'react-jhipster';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Row, Col, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export interface ILoginModalProps {
  showModal: boolean;
  loginError: boolean;
  handleLogin: (username: string, password: string, rememberMe: boolean) => void;
  handleClose: () => void;
}

const LoginModal = (props: ILoginModalProps) => {
  const login = ({ username, password, rememberMe }) => {
    props.handleLogin(username, password, rememberMe);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, touchedFields },
  } = useForm({ mode: 'onTouched' });

  const { loginError, handleClose } = props;

  const handleLoginSubmit = e => {
    handleSubmit(login)(e);
  };

  return (
    <Modal isOpen={props.showModal} toggle={handleClose} backdrop="static" id="login-page" autoFocus={false}>
      <Form onSubmit={handleLoginSubmit}>
        <ModalHeader id="login-title" data-cy="loginTitle" toggle={handleClose}>
          Login
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md="12">
              {loginError ? (
                <Alert color="danger" data-cy="loginError">
                  <strong>Failed to sign in!</strong> Please check your credentials and try again.
                </Alert>
              ) : null}
            </Col>
            <Col md="12">
              <ValidatedField
                name="username"
                placeholder="Usuário"
                required
                autoFocus
                data-cy="username"
                validate={{ required: 'Usuário não pode estar vazio!' }}
                register={register}
                error={errors.username}
                isTouched={touchedFields.username}
              />
              <ValidatedField
                name="password"
                type="password"
                placeholder="Senha"
                required
                data-cy="password"
                validate={{ required: 'Senha não pode estar vazia!' }}
                register={register}
                error={errors.password}
                isTouched={touchedFields.password}
              />
              <ValidatedField name="rememberMe" type="checkbox" check label="Lembrar da senha" value={true} register={register} />
            </Col>
          </Row>
          <div className="mt-1">&nbsp;</div>
          <Alert color="warning">
            <span>Ainda não possui uma conta?</span> <Link to="/account/register">Registre-se.</Link>
          </Alert>
          <Alert color="warning">
            <Link to="/account/reset/request" data-cy="forgetYourPasswordSelector">
              Esqueceu sua senha?
            </Link>
          </Alert>
        </ModalBody>
        <ModalFooter>
          <Button color="success" type="submit" data-cy="submit">
            Entrar
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default LoginModal;
