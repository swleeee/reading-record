import { Layout } from '@/widgets/layout';
import { MyRecord } from '@/widgets/myRecord';
import { UserInfo } from '@/features/update-user-info/ui';
import { Tab } from '@/shared/ui';

export const SettingPage = () => {
  const tabs = [
    { key: 'user', label: '회원 정보', content: <UserInfo /> },
    { key: 'myRecord', label: '나의 서재', content: <MyRecord /> },
  ];

  return (
    <Layout>
      <Tab tabs={tabs} />
    </Layout>
  );
};
