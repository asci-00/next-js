import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';

const { TextArea } = Input;

export default function Editor({
  onChange = () => {},
  onSubmit = () => {},
  loading,
  defaultText = '',
  required = true,
}) {
  const [text, setText] = useState(defaultText);

  useEffect(() => {
    setText('');
  }, [loading]);

  const onTextChange = (e) => {
    setText(() => {
      onChange(e.target.value);
      return e.target.value;
    });
  };

  const onClick = () => onSubmit(text);

  return (
    <>
      <Form.Item
        name="textarea"
        rules={[
          {
            required,
            message: 'Please input anything!',
          },
        ]}
      >
        <TextArea rows={4} onChange={onTextChange} value={text} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={loading} onClick={onClick} type="primary">
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
}
