import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import AppLayout from '@layouts/AppLayout';
import { Avatar, Card, Layout, Skeleton, Space } from 'antd';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Poster from '@components/Poster';
import { StyledPoster, StyledSider } from '../styles';
import { requestPost } from '../dummy/data';

const { Meta } = Card;

const { Content } = Layout;

function Home() {
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
      <Content width={700}>
        {posters ? (
          posters.map((poster) => <Poster key={poster.id} {...poster} />)
        ) : (
          <Skeleton loading active>
            <StyledPoster title="skeleton" extra="skeleton">
              skeleton
            </StyledPoster>
          </Skeleton>
        )}
      </Content>
    </AppLayout>
  );
}
export default Home;
