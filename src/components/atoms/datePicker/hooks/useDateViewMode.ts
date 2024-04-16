import { useState } from 'react';

import type { DateViewMode } from '@/types';

const useDateViewMode = () => {
  const [dateViewMode, setDateViewMode] = useState<DateViewMode>('date');

  const handleDateViewModeSelect = (mode: DateViewMode) => () => {
    setDateViewMode(mode);
  };

  return { dateViewMode, handleDateViewModeSelect };
};

export default useDateViewMode;
