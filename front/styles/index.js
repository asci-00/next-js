import styled from 'styled-components';
import { Card, Layout } from 'antd';

const { Sider, Content, Footer } = Layout;

export const StyledSider = styled(Sider)`
  background: rgba(0, 0, 0, 0);
`;

export const StyledPost = styled.div`
  width: 700px;
  margin: 0 auto;
  &:not(:first-of-type) {
    margin-top: 10px;
  }
  border: 1px solid white;
`;

export const StyledFooter = styled(Footer)`
  padding: 30px;
  min-height: 200px;
  line-height: 200px;
  vertical-align: middle;
  background: #ddd;
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

export const StyledCommentBox = styled.div`
  background: #fff;
  padding: 10px;
`;
