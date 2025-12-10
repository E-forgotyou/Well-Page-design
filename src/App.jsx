import React, { useState } from 'react';
import WellPageHeader from './components/WellPageHeader/WellPageHeader';
import WellPageSideNav from './components/WellPageSideNav/WellPageSideNav';
import WellDetailsContent from './components/WellDetailsContent/WellDetailsContent';
import './App.scss';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('well-details');

  const handleNavigation = (itemId) => {
    setActiveNavItem(itemId);
    console.log('Navigated to:', itemId);
  };

  return (
    <div className="app">
      <WellPageHeader 
        uwi="4217338203"
        version={3}
        versionDate="1/19/2025 03:39 AM"
        isCurrent={true}
      />
      <div className="app__layout">
        <WellPageSideNav
          activeItem={activeNavItem}
          onNavigate={handleNavigation}
        />
        <main className="app__main">
          <WellDetailsContent />
        </main>
      </div>
    </div>
  );
}

export default App;
