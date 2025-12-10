import React, { useState } from 'react';
import {
  SideNav,
  SideNavItems,
  SideNavMenu,
  SideNavMenuItem,
} from 'carbon-components-react';
import {
  ReportData16,
  DataRegular16,
  Certificate16,
  Finance16,
} from '@carbon/icons-react';
import './WellPageSideNav.scss';

export const WellPageSideNav = ({
  activeItem = 'well-details',
  onNavigate,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavigation = (itemId) => {
    onNavigate && onNavigate(itemId);
  };

  return (
    <SideNav
      isRail
      expanded={expanded}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      aria-label="Side navigation"
      className="well-page-sidenav"
    >
      <SideNavItems>
        {/* Overview Section */}
        <SideNavMenu
          renderIcon={ReportData16}
          title="Overview"
          defaultExpanded={true}
        >
          <SideNavMenuItem
            aria-current={activeItem === 'well-details' ? 'page' : undefined}
            isActive={activeItem === 'well-details'}
            onClick={() => handleNavigation('well-details')}
          >
            Well Details
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'unit-details' ? 'page' : undefined}
            isActive={activeItem === 'unit-details'}
            onClick={() => handleNavigation('unit-details')}
          >
            Unit Details
          </SideNavMenuItem>
        </SideNavMenu>

        {/* Operations Section */}
        <SideNavMenu
          renderIcon={DataRegular16}
          title="Operations"
          defaultExpanded={true}
        >
          <SideNavMenuItem
            aria-current={activeItem === 'well-geometries' ? 'page' : undefined}
            isActive={activeItem === 'well-geometries'}
            onClick={() => handleNavigation('well-geometries')}
          >
            Well Geometries
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'landing-analysis' ? 'page' : undefined}
            isActive={activeItem === 'landing-analysis'}
            onClick={() => handleNavigation('landing-analysis')}
          >
            Landing Analysis
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'completion' ? 'page' : undefined}
            isActive={activeItem === 'completion'}
            onClick={() => handleNavigation('completion')}
          >
            Completion
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'treatments' ? 'page' : undefined}
            isActive={activeItem === 'treatments'}
            onClick={() => handleNavigation('treatments')}
          >
            Treatments
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'perforations' ? 'page' : undefined}
            isActive={activeItem === 'perforations'}
            onClick={() => handleNavigation('perforations')}
          >
            Perforations
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'well-analysis' ? 'page' : undefined}
            isActive={activeItem === 'well-analysis'}
            onClick={() => handleNavigation('well-analysis')}
          >
            Well Analysis
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'decline-curve-analysis' ? 'page' : undefined}
            isActive={activeItem === 'decline-curve-analysis'}
            onClick={() => handleNavigation('decline-curve-analysis')}
          >
            Decline Curve Analysis
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'allocation-manager' ? 'page' : undefined}
            isActive={activeItem === 'allocation-manager'}
            onClick={() => handleNavigation('allocation-manager')}
          >
            Allocation Manager
          </SideNavMenuItem>
        </SideNavMenu>

        {/* Land & Ownership Section */}
        <SideNavMenu
          renderIcon={Certificate16}
          title="Land & Ownership"
          defaultExpanded={true}
        >
          <SideNavMenuItem
            aria-current={activeItem === 'ownership' ? 'page' : undefined}
            isActive={activeItem === 'ownership'}
            onClick={() => handleNavigation('ownership')}
          >
            Ownership
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'division-orders' ? 'page' : undefined}
            isActive={activeItem === 'division-orders'}
            onClick={() => handleNavigation('division-orders')}
          >
            Division Orders
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'royalty-checks' ? 'page' : undefined}
            isActive={activeItem === 'royalty-checks'}
            onClick={() => handleNavigation('royalty-checks')}
          >
            Royalty Checks
          </SideNavMenuItem>
          <SideNavMenuItem
            aria-current={activeItem === 'revenue-properties' ? 'page' : undefined}
            isActive={activeItem === 'revenue-properties'}
            onClick={() => handleNavigation('revenue-properties')}
          >
            Revenue Properties
          </SideNavMenuItem>
        </SideNavMenu>

        {/* Financial Section */}
        <SideNavMenu
          renderIcon={Finance16}
          title="Financial"
          defaultExpanded={false}
        >
          <SideNavMenuItem
            aria-current={activeItem === 'financial-overview' ? 'page' : undefined}
            isActive={activeItem === 'financial-overview'}
            onClick={() => handleNavigation('financial-overview')}
          >
            Financial Overview
          </SideNavMenuItem>
        </SideNavMenu>
      </SideNavItems>
    </SideNav>
  );
};

export default WellPageSideNav;
