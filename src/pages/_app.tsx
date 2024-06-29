import { Outlet } from 'react-router-dom';

import { SidebarPortal } from '@/shared/ui';
import './App.css';

const App = () => {
  return (
    <>
      <SidebarPortal />
      <Outlet />
    </>
  );
};

export default App;
