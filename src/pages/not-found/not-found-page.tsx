import { Row, Col } from 'antd';
import * as React from 'react';

function NotFoundPage(props: any) {
  return (
    <div>
      <Row justify="center">
        <Col xxl={{ span: 10 }}
          xl={{ span: 12 }}
          lg={{ span: 9 }}
          md={{ span: 13 }}
          xs={{ span: 20 }}
        >
          <h1 style={{ textAlign: 'center' }}>Not Found 404!</h1>
        </Col>
      </Row>

    </div>
  );
}

export default NotFoundPage;