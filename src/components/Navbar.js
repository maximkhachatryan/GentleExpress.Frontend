import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const items = [
  {
    label: 'Հաճախորդներ',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Առաքիչներ',
    key: 'app',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Պատվերներ',
    icon: <SettingOutlined />,
    children: [
      {
        label: 'Ավարտված',
      },
      {
        label: 'Ընթացքի մեջ',
      },
    ],
  }
];
const App = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />;
};
export default App;