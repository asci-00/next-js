import { LockOutlined, UserOutlined } from '@ant-design/icons';
import AppLayout from '@layouts/AppLayout';
import { Button, Checkbox, Form, Input } from 'antd';
import useInput from 'hooks/useInput';
import { useCallback } from 'react';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  width: 700px;
  margin: 10px auto;
  background: #eee;
  padding: 30px;
`;

const Login = () => {
  const [name, setName] = useInput('');
  const [password, setPassword] = useInput('');

  const onFinish = useCallback((values) => {
    console.log('Received values of form: ', values);
  }, []);

  return (
    <AppLayout>
      <StyledForm name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            value={name}
            onChange={setName}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <Button type="secondary" htmlType="button">
            Sign up
          </Button>
        </Form.Item>
      </StyledForm>
    </AppLayout>
  );
};

export default Login;
