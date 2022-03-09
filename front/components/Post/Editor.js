import { Button, Form, Input } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

export default function Editor({ onChange = () => {}, onSubmit = () => {}, loading, defaultText = '' }) {
  const [text, setText] = useState(defaultText);

  const onTextChange = (e) => {
    setText(() => {
      onChange(e.target.value);
      return e.target.value;
    });
  };

  return (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onTextChange} value={text} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={loading} onClick={onSubmit} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
}
