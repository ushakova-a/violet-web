import React from 'react';
import { Col, Row, Empty } from 'antd';
import Post from '../../components/post';
import IPost from '../../store/interfases/i-post';

type TProps = {
  postsById: any,
  postsAllIds: string[],
  getPost: (post: IPost) => any,
  [key: string]: any
};

function PostFlow({ postsById, postsAllIds, getPost }: TProps) {

  return (<div>
    {!postsAllIds.length ?
      <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <Empty description={'Постов не найдено'} />
      </div> :
      <Row gutter={[0, 16]}>
        {postsAllIds.map(
          (postId: string) => {
            const post = getPost(postsById[postId]);

            return (<Col key={postId} span={24}>
              <Post {...post}
              // key={postId}
              // author={post.author}
              // body={post.body}
              // liked={post.liked}
              // likedBy={post.likedBy}
              // onLike={post.onLike}
              // onClose={post.onDelete}
              />
            </Col>)
          }
        )}
      </Row>}
  </div>);
};

export default PostFlow;
