import { Input, Menu } from 'antd';
import Link from 'next/link';

const { Search } = Input;

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/about">
            <a>About</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Search
            placeholder="input search text"
            onSearch={() => {}}
            style={{ width: 200, verticalAlign: 'middle' }}
            enterButton
          />
        </Menu.Item>
      </Menu>

      {children}
    </div>
  );
};

export default AppLayout;
