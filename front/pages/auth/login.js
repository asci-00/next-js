import { login } from '@actions/index';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import AuthLayout from '@layouts/AuthLayout';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import useInput from 'hooks/useInput';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [name, setName] = useInput('');
  const [password, setPassword] = useInput('');

  const dispatch = useDispatch();
  const onLogin = () => dispatch(login({ name, password }));

  return (
    <AuthLayout title="Login">
      <Form name="normal_login" initialValues={{ remember: true }} onFinish={onLogin}>
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

        <Space size={10}>
          <Button type="primary" htmlType="submit">
            Log in
          </Button>
          <Link href="/auth/signup">
            <Button type="secondary" htmlType="button">
              Sign up
            </Button>
          </Link>
        </Space>
      </Form>
    </AuthLayout>
  );
};

export default Login;
