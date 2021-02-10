import React from 'react';
import { Col, Row, Empty } from 'antd';
import Post from '../../components/post';
import PostContainer from '../../containers/post-container';
import IUIPost from '../post/i-ui-post';

type TProps = {
  postsAllIds: string[],
  [key: string]: any
};

function PostFlow({ postsAllIds }: TProps) {

  return (<div>
    {!postsAllIds.length ?
      <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <Empty description={'Постов не найдено'} />
      </div> :
      <Row gutter={[0, 16]}>
        {postsAllIds.map(
          (postId: string) => (<Col key={postId} span={24}>
            <PostContainer id={postId}>
              {({ post }: { post: IUIPost }) => <Post {...post} />}
            </PostContainer>
          </Col>)
        )}
      </Row>}
  </div>);
};

export default PostFlow;
