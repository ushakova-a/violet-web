import React from 'react';
import { Row, Col, Typography } from 'antd';
// import { Helmet } from 'react-helmet';

// import MainLayout from '../../layouts/main-layout';
import LoginForm from './login-form';

const { Title } = Typography;

export default function LoginPage() {

  return (
    <div className="auth">
      <div className="auth__block">
        <Row justify="center" align="middle">
          <Col xxl={{ span: 5 }}
            xl={{ span: 6 }}
            lg={{ span: 9 }}
            md={{ span: 13 }}
            xs={{ span: 20 }}
          >
            <Title className="auth__title auth__title--level1">Index Page</Title>
            <LoginForm />
          </Col>
        </Row>
      </div>
    </div>
  );
};
