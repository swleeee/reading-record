import React from 'react';

import type { TabType } from '@/types';
import useTab from './hooks/useTab';
import * as S from './Tab.styled';

interface TabProps {
  tabs: TabType[];
}

const Tab = ({ tabs }: TabProps) => {
  const { activeTab, handleTabClick } = useTab(tabs);

  return (
    <>
      <S.TabContainer>
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
      </S.TabContainer>
      {tabs.map((tab) => (
        <section
          key={tab.key}
          id={`panel-${tab.key}`}
          tabIndex={0}
          role="tabpanel"
          aria-labelledby={`tab-${tab.key}`}
          hidden={activeTab?.key !== tab.key}
        >
          {activeTab?.key === tab.key ? tab.content : null}
        </section>
      ))}
    </>
  );
};

export default Tab;
