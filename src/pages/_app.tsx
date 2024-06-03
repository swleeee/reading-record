import { Outlet } from 'react-router-dom';

import { SidebarPortal } from '@/components';
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
