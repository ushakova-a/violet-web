import { Row, Col, Button } from 'antd';
import * as React from 'react';
import { Link, Redirect, useParams } from 'react-router-dom';
import InputButton from '../../components/input-button';
import PostFlow from '../../components/post-flow';
import ProfilePostContainer from './profile-post-container';
import ProfileUserContainer from './profile-user-container';

export default function ProfilePage(props: any) {
  const { id: userId }: any = useParams();

  return (
    <div className="profile">
      <div className="profile__block">
        <Row justify="center">
          <Col xxl={{ span: 10 }}
            xl={{ span: 12 }}
            lg={{ span: 9 }}
            md={{ span: 13 }}
            xs={{ span: 20 }}
          >
            <ProfileUserContainer id={userId} >
              {({ profile }: any) => {

                if (!profile) return <Redirect to="/not-found" />;

                return <>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <Row gutter={8}>
                      <Col lg={{ span: 10 }}>
                        {profile.onChangeUserName ?
                          <InputButton
                            size="large"
                            value={profile.name}
                            onChange={({ target }) => profile.onChangeUserName(target.value)}
                          /> : <h1>{profile.name}</h1>}
                      </Col>
                      <Col lg={{ span: 14 }}>
                        <Button type="link">{profile.subscribtionCount} подписки</Button>{' '}
                        <Button type="link">{profile.subscriberCount} подписчиков</Button>
                      </Col>
                    </Row>
                  </div>
                  {profile.onSubscribe ?
                    <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                      <Button type="primary" onClick={profile.onSubscribe}>
                        {profile.subscribed ? 'Отписаться' : 'Подписаться'}
                      </Button>
                    </div> :
                    <div />}
                </>
              }}
            </ProfileUserContainer>

            <ProfilePostContainer id={userId}>
              {({ posts, createPost }: any) => {

                return (<>
                  <PostFlow postsAllIds={posts.postIds} />
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to="/feed">В ленту</Link>
                    <Button type="primary"> {/* компонент создания поста */}
                      Создать пост +
                    </Button>
                  </div>

                </>)
              }}
            </ProfilePostContainer>
            {/* меню слева с подписчиками и подписками */}
          </Col>
        </Row>
      </div>
    </div>
  );
};
