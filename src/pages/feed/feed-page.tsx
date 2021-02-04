import * as React from 'react';
import { Row, Col } from 'antd';
import FeedPostContainer from './feed-post-container';
import { Tabs } from 'antd';
import PostFlow from '../../components/post-flow';

import './feed-page.scss';

const { TabPane } = Tabs;

export default function FeedPage() {

  return (
    <div className="feed">
      <div className="feed__block">
        <Row justify="center">
          <Col xxl={{ span: 10 }}
            xl={{ span: 12 }}
            lg={{ span: 9 }}
            md={{ span: 13 }}
            xs={{ span: 20 }}
          >
            <FeedPostContainer>
              {({ values, getPost }: any) => {

                return (
                  <Tabs defaultActiveKey="all" type="card">

                    {values.map((value: any) => <TabPane key={value.id} tab={value.title}>
                      <PostFlow postsById={value.postsById} postsAllIds={value.postsAllIds} getPost={getPost}/>
                    </TabPane>)}
                    
                  </Tabs>
                )
              }}
            </FeedPostContainer>
          </Col>
        </Row>
      </div>
    </div>
  );
};
