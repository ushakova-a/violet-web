import * as React from 'react';
import { Card, Button } from 'antd';
import { CloseOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import IUIPost from './i-ui-post';
import IUIUser from '../../store/interfases/i-ui-user';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default function Post({ author, body, liked, likedBy, onClose, onLike }: IUIPost) {

  return <Card>
    <Meta
      title={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to={author.path}>{author.name}</Link>
        <div>
          {onClose && <Button
            type="link"
            size="small"
            onClick={onClose}
            icon={<CloseOutlined />}
          />}
          <Button
            type="link"
            size="small"
            onClick={onLike}
            icon={liked ? <HeartFilled /> : <HeartOutlined />}
          />
        </div>
      </div>}
      description={<div style={{ marginBottom: '1rem' }}>{body}</div>}
    />
    <div>Понравилось: {likedBy.map(
      ({ id, name, path }: IUIUser) => <React.Fragment key={id}>
        <Link to={path}>{name}</Link>{', '}
      </React.Fragment>
    )}
    </div>
  </Card>
};
