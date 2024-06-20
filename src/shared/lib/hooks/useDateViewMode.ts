import { useState } from 'react';

import type { DateViewMode } from '@/shared/model';

const useDateViewMode = () => {
  const [dateViewMode, setDateViewMode] = useState<DateViewMode>('date');

  const handleDateViewModeSelect = (mode: DateViewMode) => () => {
    setDateViewMode(mode);
  };

  return { dateViewMode, handleDateViewModeSelect };
};

export default useDateViewMode;
