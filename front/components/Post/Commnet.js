import { Avatar, Button, Comment, Form, Input } from 'antd';
import { useSelector } from 'react-redux';
import { useCallback, useRef, useState } from 'react';
import { StyledCommentBox } from '../../styles';
import useInput from '../../hooks/useInput';
import Editor from './Editor';

const { TextArea } = Input;

const dummyComment = [
  {
    id: 0,
    postId: 0,
    name: 'user1',
    date: 'datetime',
    content: 'test comment',
    children: [],
  },
];

export default function CustomComment({ comments = dummyComment, postId, visible }) {
  const { name, id } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(false);
  const [commentContent, setCommentContent] = useInput(null);

  const onSubmit = (text) => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
    setCommentContent(text);
  };

  const Comments = ({ items }) =>
    items.map((comment) => (
      <Comment
        actions={[<span key="comment-nested-reply-to">Reply to</span>]}
        author={<a>{comment.name}</a>}
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt={comment.name} />}
        content={comment.content}
        key={comment.id}
      >
        {comment.children && comment.children > 0 && <Comments items={comment.children} />}
      </Comment>
    ));

  return (
    visible && (
      <StyledCommentBox>
        {comments && <Comments items={comments} />}
        <Comment
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
          content={<Editor onSubmit={onSubmit} loading={loading} defaultText={commentContent} />}
        />
      </StyledCommentBox>
    )
  );
}
