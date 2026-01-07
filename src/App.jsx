import React, { useState } from 'react';
import WellPageHeader from './components/WellPageHeader/WellPageHeader';
import WellPageSideNav from './components/WellPageSideNav/WellPageSideNav';
import './App.scss';

function App() {
  const [activeNavItem, setActiveNavItem] = useState('well-details');

  const handleNavigation = (itemId) => {
    setActiveNavItem(itemId);
    console.log('Navigated to:', itemId);
  };

  // Get page title based on active nav item
  const getPageTitle = () => {
    const titles = {
      'well-details': 'Well Details',
      'unit-details': 'Unit Details',
      'well-geometries': 'Well Geometries',
      'landing-analysis': 'Landing Analysis',
      'completion': 'Completion',
      'treatments': 'Treatments',
      'perforations': 'Perforations',
      'well-analysis': 'Well Analysis',
      'decline-curve-analysis': 'Decline Curve Analysis',
      'allocation-manager': 'Allocation Manager',
      'ownership': 'Ownership',
      'division-orders': 'Division Orders',
      'royalty-checks': 'Royalty Checks',
      'revenue-properties': 'Revenue Properties',
      'financial-overview': 'Financial Overview',
    };
    return titles[activeNavItem] || 'Well Details';
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
          <h1 className="app__page-title">{getPageTitle()}</h1>
          <div className="app__content-placeholder">
            <span>Content</span>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
