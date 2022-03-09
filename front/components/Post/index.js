import { CommentOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Badge, Button, Popover, Card } from 'antd';
import { useState } from 'react';
import { StyledPoster } from '../../styles';
import CustomComment from './Commnet';

export default function Post({ title, date, content, name, comments }) {
  const [comment, setComment] = useState(null);
  const [commentVisible, setCommentVisible] = useState(false);
  return (
    <StyledPoster>
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
                <Button>삭제</Button>
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        {content}
      </Card>
      <CustomComment comments={comments} visible={commentVisible} />
    </StyledPoster>
  );
}
