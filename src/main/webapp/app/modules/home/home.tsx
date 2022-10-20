import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <>
      <Row>
        <Col md="5" className="pad">
          <div className="hipster rounded">
            <span className="logo-backdrop" />
          </div>
        </Col>
        <Col sm="4" className="teste">
          <div className="second-col-wrapper">
            <span className="second-col-content">
              Coma bem, pagando pouco <span className="special-content">e de quebra,</span> ajude o meio ambiente
            </span>
          </div>

          <Row className="buttons-row">
            <Col className="buttons-col">
              <Link to="/login" className="btn login-btn">
                LOGIN
              </Link>
            </Col>

            <Col className="buttons-col buttons-separator">
              <span>ou</span>
            </Col>
            <Col className="buttons-col">
              <Link to="/account/register" className="btn register-btn">
                CADASTRE-SE
              </Link>
            </Col>
          </Row>

          {account?.login ? (
            <div>
              <Alert color="success">You are logged in as user &quot;{account.login}&quot;.</Alert>
            </div>
          ) : (
            <div></div>
          )}
        </Col>
      </Row>

      <Row>
        <Col></Col>
      </Row>
    </>
  );
};

export default Home;
