import { Tab } from '@/components';
import UserInfo from './userInfo/UserInfo';

const Setting = () => {
  const tabs = [{ key: 'user', label: '회원 정보', content: <UserInfo /> }];

  return <Tab tabs={tabs} />;
};

export default Setting;
