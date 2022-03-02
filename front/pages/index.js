import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import AppLayout from '@layouts/AppLayout';
import { Avatar, Card, Layout, Space } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const { Meta } = Card;
const { Sider, Content } = Layout;

const StyledSider = styled(Sider)`
  background: rgba(0, 0, 0, 0);
`;

const StyledContent = styled(Content)`
  padding: 10px 0;
  background: #ddd;
`;

const StyledPoster = styled(Card)`
  width: 700px;
  margin: 10px auto;
`;

const dummyData = [
  {
    title: 'Poster',
    content: '',
    user: '',
    date: '2022-01-22 14:22',
    comment: [],
  },
  {
    title: 'Poster',
    content: '',
    user: '',
    date: '2022-01-23 15:27',
    comment: [],
  },
  {
    title: 'Poster',
    content: '',
    user: '',
    date: '2022-01-27 12:02',
    comment: [],
  },
  {
    title: 'Poster',
    content: '',
    user: '',
    date: '2022-01-28 10:12',
    comment: [],
  },
];

const Home = () => {
  const auth = useSelector((state) => state.auth);
  const { name, introduction } = useSelector((state) => state.auth);

  return (
    <AppLayout>
      <StyledSider width={300}>
        <Space direction="vertical">
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={name}
              description={introduction}
            />
          </Card>
          <Card title="Information" style={{ width: 300 }}>
            <p>학교</p>
            <p>생일</p>
            <p>주소</p>
          </Card>
        </Space>
      </StyledSider>
      <StyledContent width="700">
        {dummyData.map((poster) => (
          <StyledPoster title={poster.title} extra={poster.date} key={poster.title + poster.date}>
            {poster.content}
            {poster.user}
          </StyledPoster>
        ))}
      </StyledContent>
    </AppLayout>
  );
};
export default Home;
