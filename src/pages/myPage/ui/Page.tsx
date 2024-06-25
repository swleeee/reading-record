import { Layout } from '@/widgets/layout';
import { MyRecord } from '@/widgets/myRecord';
import { Setting } from '@/widgets/setting';
import { UserInfo } from '@/features/update-user-info/ui';
import { Tab } from '@/shared/ui';

export const MyPage = () => {
  const tabs = [
    { key: 'info', label: '회원 정보', content: <UserInfo /> },
    { key: 'record', label: '나의 서재', content: <MyRecord /> },
    { key: 'setting', label: '설정', content: <Setting /> },
  ];

  return (
    <Layout>
      <Tab tabs={tabs} />
    </Layout>
  );
};
