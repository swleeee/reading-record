import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { TabType } from '@/types';
import * as S from './Tab.styled';

const QUERY_STRING_TAB_KEY = 'tabId';

interface TabProps {
  tabs: TabType[];
}

const Tab = ({ tabs }: TabProps) => {
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

  return (
    <>
      <S.TabList role="tablist">
        {tabs.map((tab) => {
          const isSelected = activeTab?.key === tab.key;

          return (
            <S.TabItem
              key={tab.key}
              role="presentation"
              isSelected={isSelected}
            >
              <S.TabButton
                id={`tab-${tab.key}`}
                type="button"
                role="tab"
                aria-controls={`panel-${tab.key}`}
                aria-selected={isSelected}
                isSelected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={handleTabClick(tab)}
              >
                {tab.label}
              </S.TabButton>
            </S.TabItem>
          );
        })}
      </S.TabList>
      {tabs.map((tab) => (
        <S.TabPanel
          key={tab.key}
          id={`panel-${tab.key}`}
          tabIndex={0}
          role="tabpanel"
          aria-labelledby={`tab-${tab.key}`}
          hidden={activeTab?.key !== tab.key}
        >
          {activeTab?.key === tab.key ? tab.content : null}
        </S.TabPanel>
      ))}
    </>
  );
};

export default Tab;
