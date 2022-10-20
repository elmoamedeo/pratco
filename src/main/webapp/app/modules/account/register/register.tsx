import React, { useState, useEffect } from 'react';
import { ValidatedField, ValidatedForm, isEmail } from 'react-jhipster';
import { Row, Col, Button } from 'reactstrap';
import { toast } from 'react-toastify';

import PasswordStrengthBar from 'app/shared/layout/password/password-strength-bar';
import { useAppDispatch, useAppSelector } from 'app/config/store';
import { handleRegister, reset } from './register.reducer';

export const RegisterPage = () => {
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  useEffect(
    () => () => {
      dispatch(reset());
    },
    []
  );

  const handleValidSubmit = ({ username, email, firstPassword }) => {
    dispatch(handleRegister({ login: username, email, password: firstPassword, langKey: 'en' }));
  };

  const updatePassword = event => setPassword(event.target.value);

  const successMessage = useAppSelector(state => state.register.successMessage);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
    }
  }, [successMessage]);

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h1 id="register-title" data-cy="registerTitle">
            Cadastro
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          <ValidatedForm id="register-form" onSubmit={handleValidSubmit}>
            <ValidatedField
              name="username"
              placeholder="Usuário"
              validate={{
                required: { value: true, message: 'O usuário é obrigatório!' },
                pattern: {
                  value: /^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$/,
                  message: 'Seu usuário é inválido.',
                },
                minLength: { value: 1, message: 'Seu usuário precisa ter pelo menos 1 caractere.' },
                maxLength: { value: 50, message: 'Seu usuário não pode ter mais que 50 caracteres.' },
              }}
              data-cy="username"
            />
            <ValidatedField
              name="email"
              placeholder="Email"
              type="email"
              validate={{
                required: { value: true, message: 'O email é obrigatório!' },
                minLength: { value: 5, message: 'Seu email precisa ter pelo menos 5 caracteres.' },
                maxLength: { value: 254, message: 'Seu email não pode tre mais do que 50 caracteres.' },
                validate: v => isEmail(v) || 'Seu email é inválido.',
              }}
              data-cy="email"
            />
            <ValidatedField
              name="firstPassword"
              placeholder="Senha"
              type="password"
              onChange={updatePassword}
              validate={{
                required: { value: true, message: 'A senha é obrigatória!' },
                minLength: { value: 4, message: 'Sua senha precisa ter pelo menos 4 caracteres.' },
                maxLength: { value: 50, message: 'Sua senha não pode ter mais do que 50 caracteres.' },
              }}
              data-cy="firstPassword"
            />
            <PasswordStrengthBar password={password} />
            <ValidatedField
              name="secondPassword"
              placeholder="Confirme sua senha"
              type="password"
              validate={{
                required: { value: true, message: 'A confirmação da senha é obrigatória!' },
                minLength: { value: 4, message: 'Sua confirmação de senha precisa ter pelo menos 4 caracteres.' },
                maxLength: { value: 50, message: 'Sua confirmação de senha não pode ter mais do que 50 caracteres.' },
                validate: v => v === password || 'As senhas não conferem!',
              }}
              data-cy="secondPassword"
            />
            <Button id="register-submit" color="success" type="submit" data-cy="submit">
              Cadastrar
            </Button>
          </ValidatedForm>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
