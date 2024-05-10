import React from 'react';

import type { TabType } from '@/types';
import useTab from '../hooks/useTab';
import * as S from './SideTab.styled';

interface SideTabProps {
  className?: string;
  tabs: TabType[];
}

const SideTab = ({ className, tabs }: SideTabProps) => {
  const { activeTab, handleTabClick } = useTab(tabs);

  return (
    <S.TabContainer className={className}>
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
    </S.TabContainer>
  );
};

export default SideTab;
