import { CommentOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Badge, Button, Popover, Card } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { REMOVE_POST_REQUEST } from '@actions/index';
import { StyledPost } from '../../styles';
import CustomComment from './Commnet';

export default function Post({ title, date, content, name, id, comments }) {
  const [commentVisible, setCommentVisible] = useState(false);
  const dispatch = useDispatch();

  const deletePost = () => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      id,
    });
  };

  return (
    <StyledPost>
      <Card
        title={title}
        extra={
          <div style={{ textAlign: 'right' }}>
            <Badge color="cyan" text={date.toLocaleDateString()} />
            <br />
            <span style={{ color: '#bbb' }}>{name}</span>
          </div>
        }
        actions={[
          <CommentOutlined key="setting" onClick={() => setCommentVisible(!commentVisible)} />,
          <Popover
            key="ellipsis"
            trigger="click"
            content={
              <Button.Group>
                <Button>수정</Button>
                <Button onClick={deletePost}>삭제</Button>
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        {content}
      </Card>
      <CustomComment postId={id} comments={comments} visible={commentVisible} />
    </StyledPost>
  );
}
