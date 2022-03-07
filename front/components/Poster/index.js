import { CommentOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Badge, Button, Popover } from 'antd';
import { StyledPoster } from '../../styles';

export default function Index({ title, date, content, name }) {
  return (
    <StyledPoster
      title={title}
      extra={
        <div style={{ textAlign: 'right' }}>
          <Badge color="cyan" text={date.toLocaleDateString()} />
          <br />
          <span style={{ color: '#bbb' }}>{name}</span>
        </div>
      }
      actions={[
        <CommentOutlined key="setting" />,
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
    </StyledPoster>
  );
}
