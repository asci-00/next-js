import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import AppLayout from '@layouts/AppLayout';
import { Avatar, Card, Layout, Skeleton, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Post from '@components/Post';
import { SET_POSTS_REQUEST } from '@actions/index';
import { StyledPost, StyledSider } from '../styles';

const { Meta } = Card;
const { Content } = Layout;

function Home() {
  const { name, introduction } = useSelector((state) => state.auth);
  const { postLoading, requestError, posts } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: SET_POSTS_REQUEST });
  }, []);

  if (postLoading) return <div>Post Loading</div>;
  if (requestError) return <div>API call error</div>;

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
        {posts ? (
          posts.map((post) => <Post key={post.id} {...post} />)
        ) : (
          <Skeleton loading active>
            <StyledPost title="skeleton" extra="skeleton">
              skeleton
            </StyledPost>
          </Skeleton>
        )}
      </Content>
    </AppLayout>
  );
}
export default Home;
