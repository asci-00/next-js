import 'antd/dist/antd.css';
import Head from 'next/head';

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

export default App;
// Web App에 공통적으로 적용될 코드
