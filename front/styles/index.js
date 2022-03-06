import styled from 'styled-components';
import { Card, Layout } from 'antd';

const { Sider, Content, Footer } = Layout;

export const StyledSider = styled(Sider)`
  background: rgba(0, 0, 0, 0);
`;

export const StyledContent = styled(Content)`
  padding: 10px 0;
  background: #ddd;
`;

export const StyledPoster = styled(Card)`
  width: 700px;
  margin: 10px auto;
`;

export const StyledFooter = styled(Footer)`
  padding: 30px;
  min-height: 200px;
  line-height: 200px;
  vertical-align: middle;
  text-align: center;
`;

export const StyledLayout = styled(Layout)`
  position: relative;
  padding: 30px;
  min-height: 900px;
`;

export const StyledLoginForm = styled(Content)`
  position: relative;
  padding: 30px;
  min-height: 900px;
  line-height: 900px;
  text-align: center;
`;

export const StyledCard = styled(Card)`
  display: inline-block;
  margin: 10px auto;
  background: #eee;
  padding: 30px;
  width: 700px;
`;
