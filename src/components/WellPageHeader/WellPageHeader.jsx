import React from 'react';
import { Button, OverflowMenu, OverflowMenuItem } from 'carbon-components-react';
import { ChevronDown16, Upload16, AddComment16 } from '@carbon/icons-react';
import './WellPageHeader.scss';

// Well icon SVG component (Stronghold well icon)
const WellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M23.0817 10.9618V21.388H21.5861L21.5859 11.4613L22.2504 11.2333L23.0817 10.9618Z" fill="#0F62FE"/>
    <path d="M21.909 3.44977L19.5302 0L15.291 1.61747L16.1596 5.64225L19.9427 10.4307L22.7712 9.35222L21.909 3.44977ZM19.0038 1.5664L20.6131 3.90015L21.2924 8.55065L20.4039 8.88942L17.4224 5.11559L16.8351 2.3939L19.0038 1.5664Z" fill="#0F62FE"/>
    <path d="M3.29446 14.3347V21.9236H1.79883V14.3347H3.29446Z" fill="#0F62FE"/>
    <path d="M10.2324 8.8735L6.26172 10.2399L6.28529 9.02936L9.31688 7.94656C9.53399 8.32324 9.85007 8.64243 10.2324 8.8735ZM17.2011 5.13132L17.5919 6.33423L14.2752 7.48012C14.3503 7.2477 14.3907 7.00114 14.3907 6.74573C14.3907 6.54417 14.3655 6.34811 14.318 6.16017L17.2011 5.13132Z" fill="#0F62FE"/>
    <path d="M16.0903 21.3806L16.1896 21.9236H7.19531L7.29431 21.3806H16.0903ZM9.64945 8.39825C9.95439 8.7293 10.3493 8.98544 10.7986 9.13327L8.72681 20.5376H7.44731L9.64945 8.39825ZM13.7398 8.39355L15.9388 20.5376H14.6563L12.5893 9.13227C13.0395 8.98359 13.4349 8.72613 13.7398 8.39355Z" fill="#0F62FE"/>
    <path d="M5.39657 8.43216V13.4914H0V8.43216H5.39657ZM4.04703 9.69639H1.34901V12.2258H4.04703V9.69639Z" fill="#0F62FE"/>
    <path d="M15.2906 18.8523V20.1171H8.54492V18.8523H15.2906Z" fill="#0F62FE"/>
    <path d="M14.3907 15.0578V16.3227H8.99414V15.0578H14.3907Z" fill="#0F62FE"/>
    <path d="M13.942 11.2634V12.5282H9.89453V11.2634H13.942Z" fill="#0F62FE"/>
    <path d="M17.09 21.382V22.6468H6.29688V21.382H17.09Z" fill="#0F62FE"/>
    <path d="M11.6934 8.43215C12.6869 8.43215 13.4922 7.67711 13.4922 6.74572C13.4922 5.81434 12.6869 5.0593 11.6934 5.0593C10.6999 5.0593 9.89453 5.81434 9.89453 6.74572C9.89453 7.67711 10.6999 8.43215 11.6934 8.43215Z" fill="#0F62FE"/>
  </svg>
);

export const WellPageHeader = ({
  uwi = '4217338203',
  version = 3,
  versionDate = '1/19/2025 03:39 AM',
  isCurrent = true,
  onVersionSelect,
  onUploadClick,
  onCommentClick,
}) => {
  const versionText = `Version ${version}${isCurrent ? ' Current' : ''} (${versionDate})`;

  return (
    <header className="well-page-header">
      {/* Left Section */}
      <div className="well-page-header__left">
        {/* Well Icon and UWI */}
        <div className="well-page-header__title-group">
          <div className="well-page-header__icon">
            <WellIcon />
          </div>
          <h1 className="well-page-header__title">
            <span className="well-page-header__title-label">UWI</span>
            <span className="well-page-header__title-value">{uwi}</span>
          </h1>
        </div>

        {/* Version Info */}
        <div className="well-page-header__version-group">
          <div className="well-page-header__version-info">
            <span className="well-page-header__version-text">{versionText}</span>
          </div>
          <OverflowMenu
            flipped
            renderIcon={ChevronDown16}
            className="well-page-header__version-menu"
            iconDescription="Version history"
          >
            <OverflowMenuItem 
              itemText="Version 3 (Current)" 
              onClick={() => onVersionSelect && onVersionSelect(3)}
            />
            <OverflowMenuItem 
              itemText="Version 2" 
              onClick={() => onVersionSelect && onVersionSelect(2)}
            />
            <OverflowMenuItem 
              itemText="Version 1" 
              onClick={() => onVersionSelect && onVersionSelect(1)}
            />
          </OverflowMenu>
        </div>
      </div>

      {/* Right Section - Action Buttons (Tertiary, Icon Only, Medium) */}
      <div className="well-page-header__right">
        <Button
          kind="tertiary"
          size="field"
          hasIconOnly
          renderIcon={Upload16}
          iconDescription="Upload"
          tooltipPosition="bottom"
          onClick={onUploadClick}
        />
        <Button
          kind="tertiary"
          size="field"
          hasIconOnly
          renderIcon={AddComment16}
          iconDescription="Add Comment"
          tooltipPosition="bottom"
          onClick={onCommentClick}
        />
      </div>
    </header>
  );
};

export default WellPageHeader;
