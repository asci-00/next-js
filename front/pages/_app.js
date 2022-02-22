import 'antd/dist/antd.css';
import Head from 'next/head';
import wrapper from 'store';

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>React Study</title>
      </Head>
      <Component />;
    </>
  );
};

export default wrapper.withRedux(App);
// Web App에 공통적으로 적용될 코드
