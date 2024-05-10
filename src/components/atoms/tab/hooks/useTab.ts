import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { TabType } from '@/types';

const QUERY_STRING_TAB_KEY = 'tabId';

const useTab = (tabs: TabType[]) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeTab, setActiveTab] = useState<TabType | null>(null);

  const handleTabClick =
    ({ key }: TabType) =>
    () => {
      setSearchParams({ [QUERY_STRING_TAB_KEY]: key });
    };

  useEffect(() => {
    const queryStringTabValue = searchParams.get(QUERY_STRING_TAB_KEY);

    if (!queryStringTabValue) {
      setActiveTab(tabs[0]);
      return;
    }

    const selectedTab = tabs.filter((tab) => tab.key === queryStringTabValue);

    if (!selectedTab.length) {
      setActiveTab(tabs[0]);
      setSearchParams({ [QUERY_STRING_TAB_KEY]: tabs[0].key });
      return;
    }

    setActiveTab(selectedTab[0]);
  }, [searchParams.get(QUERY_STRING_TAB_KEY)]);

  return { activeTab, handleTabClick };
};

export default useTab;
