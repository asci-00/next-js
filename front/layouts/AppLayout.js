import { logout } from '@actions/index';
import { Button, Input, Layout, Menu } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const { Footer } = Layout;
const { Search } = Input;

const StyledFooter = styled(Footer)`
  padding: 30px;
  min-height: 200px;
  line-height: 200px;
  vertical-align: middle;
  text-align: center;
`;

const StyledLayout = styled(Layout)`
  position: relative;
  padding: 30px;
  min-height: 900px;
`;

const AppLayout = ({ children }) => {
  const { isLogin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  useEffect(() => {
    if (!isLogin) Router.push('/auth/login');
  }, [isLogin]);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="Home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="Profile">
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="Search">
          <Search
            placeholder="input search text"
            onSearch={() => {}}
            style={{ width: 200, verticalAlign: 'middle' }}
            enterButton
          />
        </Menu.Item>
        {!isLogin ? (
          <>
            <Menu.Item key="Login">
              <Link href="/auth/login">
                <a>Login</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="Signup">
              <Link href="/auth/signup">
                <a>Signup</a>
              </Link>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item key="Signup">
            <Button onClick={onLogout}>
              <a>Logout</a>
            </Button>
          </Menu.Item>
        )}
      </Menu>

      <StyledLayout>{children}</StyledLayout>
      <StyledFooter>@Copyright asci</StyledFooter>
    </div>
  );
};

export default AppLayout;
