import { Card, Input, Layout } from 'antd';
import Router from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const { Content, Footer } = Layout;
const { Search } = Input;

const StyledFooter = styled(Footer)`
  padding: 30px;
  min-height: 200px;
  line-height: 200px;
  vertical-align: middle;
  text-align: center;
`;

const StyledContent = styled(Content)`
  position: relative;
  padding: 30px;
  min-height: 900px;
  line-height: 900px;
  text-align: center;
`;

const StyledCard = styled(Card)`
  display: inline-block;
  margin: 10px auto;
  background: #eee;
  padding: 30px;
  width: 700px;
`;

const AuthLayout = ({ children, title }) => {
  const { isLogin } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isLogin) Router.push('/');
  }, [isLogin]);

  return (
    <div>
      <StyledContent>
        <StyledCard title={title}>{children}</StyledCard>
      </StyledContent>
      <StyledFooter>@Copyright asci</StyledFooter>
    </div>
  );
};

export default AuthLayout;
