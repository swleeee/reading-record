import { MyRecord, Tab } from '@/components';
import UserInfo from './userInfo/UserInfo';

const Setting = () => {
  const tabs = [
    { key: 'user', label: '회원 정보', content: <UserInfo /> },
    { key: 'myRecord', label: '나의 서재', content: <MyRecord /> },
  ];

  return <Tab tabs={tabs} />;
};

export default Setting;
