import { Avatar, Comment } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMMENT_REQUEST } from '@actions/index';
import { useCallback } from 'react';
import { StyledCommentBox } from '../../styles';
import Editor from './Editor';

export default function CustomComment({ comments = [], postId, visible }) {
  const { id, name } = useSelector((state) => state.auth);
  const { commentLoading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (text) => {
      dispatch({
        type: ADD_COMMENT_REQUEST,
        data: {
          id: Math.floor(Math.random(100) * 10),
          name,
          postId,
          userId: id,
          date: Date(),
          content: text,
        },
      });
    },
    [name, postId]
  );

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
          content={<Editor onSubmit={onSubmit} loading={commentLoading} />}
        />
      </StyledCommentBox>
    )
  );
}
