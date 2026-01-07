import React, { useState } from 'react';
import {
  ReportData16,
  DataRegular16,
  Certificate16,
  Finance16,
  ChevronUp16,
  ChevronDown16,
} from '@carbon/icons-react';
import './WellPageSideNav.scss';

const navSections = [
  {
    id: 'overview',
    title: 'Overview',
    icon: ReportData16,
    items: [
      { id: 'well-details', label: 'Well Details' },
      { id: 'unit-details', label: 'Unit Details' },
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    icon: DataRegular16,
    items: [
      { id: 'well-geometries', label: 'Well Geometries' },
      { id: 'landing-analysis', label: 'Landing Analysis' },
      { id: 'completion', label: 'Completion' },
      { id: 'treatments', label: 'Treatments' },
      { id: 'perforations', label: 'Perforations' },
      { id: 'well-analysis', label: 'Well Analysis' },
      { id: 'decline-curve-analysis', label: 'Decline Curve Analysis' },
      { id: 'allocation-manager', label: 'Allocation Manager' },
    ],
  },
  {
    id: 'land-ownership',
    title: 'Land & Ownership',
    icon: Certificate16,
    items: [
      { id: 'ownership', label: 'Ownership' },
      { id: 'division-orders', label: 'Division Orders' },
      { id: 'royalty-checks', label: 'Royalty Checks' },
      { id: 'revenue-properties', label: 'Revenue Properties' },
    ],
  },
  {
    id: 'financial',
    title: 'Financial',
    icon: Finance16,
    items: [
      { id: 'financial-overview', label: 'Financial Overview' },
    ],
  },
];

export const WellPageSideNav = ({
  activeItem = 'well-details',
  onNavigate,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    operations: true,
    'land-ownership': true,
    financial: false,
  });

  const handleNavigation = (itemId) => {
    onNavigate && onNavigate(itemId);
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  // Find which section contains the active item
  const getActiveSectionId = () => {
    for (const section of navSections) {
      if (section.items.some(item => item.id === activeItem)) {
        return section.id;
      }
    }
    return null;
  };

  const activeSectionId = getActiveSectionId();

  return (
    <nav
      className={`well-page-sidenav ${expanded ? 'well-page-sidenav--expanded' : ''}`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      aria-label="Side navigation"
    >
      {/* Collapsed View - Icons Only */}
      {!expanded && (
        <div className="well-page-sidenav__collapsed">
          {navSections.map((section) => {
            const Icon = section.icon;
            const isActive = section.id === activeSectionId;
            return (
              <button
                key={section.id}
                className={`well-page-sidenav__icon-btn ${isActive ? 'well-page-sidenav__icon-btn--active' : ''}`}
                onClick={() => {
                  const firstItem = section.items[0];
                  if (firstItem) handleNavigation(firstItem.id);
                }}
                title={section.title}
              >
                <Icon />
              </button>
            );
          })}
        </div>
      )}

      {/* Expanded View - Full Menu */}
      {expanded && (
        <div className="well-page-sidenav__expanded">
          {navSections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSections[section.id];
            return (
              <div key={section.id} className="well-page-sidenav__section">
                <button
                  className="well-page-sidenav__section-header"
                  onClick={() => toggleSection(section.id)}
                >
                  <div className="well-page-sidenav__section-left">
                    <Icon />
                    <span>{section.title}</span>
                  </div>
                  {isExpanded ? <ChevronUp16 /> : <ChevronDown16 />}
                </button>
                {isExpanded && (
                  <div className="well-page-sidenav__section-items">
                    {section.items.map((item) => (
                      <button
                        key={item.id}
                        className={`well-page-sidenav__item ${activeItem === item.id ? 'well-page-sidenav__item--active' : ''}`}
                        onClick={() => handleNavigation(item.id)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default WellPageSideNav;
