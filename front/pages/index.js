import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import AppLayout from '@layouts/AppLayout';
import { Avatar, Card, Layout, Skeleton, Space } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { StyledPoster, StyledSider, StyledContent } from '../styles';
import { requestPost } from '../dummy/data';

const { Meta } = Card;

function Home() {
  const auth = useSelector((state) => state.auth);
  const { name, introduction } = useSelector((state) => state.auth);

  const [posters, setPosters] = useState(null);

  useEffect(() => {
    requestPost().then((res) => setPosters(res));
  }, []);

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
        {posters ? (
          posters.map((poster) => (
            <StyledPoster title={poster.title} extra={poster.date} key={poster.title + poster.date}>
              {poster.content}
              {poster.user}
            </StyledPoster>
          ))
        ) : (
          <Skeleton loading active>
            <StyledPoster title="skeleton" extra="skeleton">
              "skeleton" "skeleton"
            </StyledPoster>
          </Skeleton>
        )}
      </StyledContent>
    </AppLayout>
  );
}
export default Home;
