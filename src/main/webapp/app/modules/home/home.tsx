import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';
import { PartnersList } from './components/PartnersList/PartnersList';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <>
      <Row>
        <Col md="7" className="pad">
          <span className="hipster rounded" />
        </Col>

        <Col md="2" className="second-col-container">
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
        <span className="partners-list-title">
          Empresas que ja aderiram ao <span className="special-content"> movimento</span>
        </span>
      </Row>

      <Row>
        <PartnersList />
      </Row>
    </>
  );
};

export default Home;
