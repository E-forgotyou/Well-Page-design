import React from 'react';
import { 
  DataTable, 
  TableContainer, 
  Table, 
  TableHead, 
  TableRow, 
  TableHeader, 
  TableBody, 
  TableCell,
  Search,
  Button,
} from 'carbon-components-react';
import { 
  ZoomIn16, 
  ZoomOut16, 
  Maximize16, 
  Layers16,
  Edit16,
  Copy16,
  Download16,
  Filter16,
  Column16,
  ResetAlt16,
} from '@carbon/icons-react';
import './WellDetailsContent.scss';

// Timeline data
const timelineData = [
  { label: 'Permit', date: '09/09/2019' },
  { label: 'Spud', date: '02/18/2020' },
  { label: 'Rig Release', date: '03/06/2020' },
  { label: 'Completion', date: '12/23/2020' },
  { label: 'First Production Date', date: '12/23/2020' },
  { label: 'Last Production Date', date: '05/01/2025' },
];

// Stats tiles data
const statsTiles = [
  { label: 'Cumulative Oil', value: '263,554 bbl' },
  { label: 'Cumulative Gas', value: '1,079,997 mcf' },
  { label: 'Cumulative Water', value: '530,739 bbl' },
  { label: 'EUR Oil', value: '386,299 bbl' },
  { label: 'EUR Gas', value: '1,376,302 mcf' },
  { label: 'EUR Water', value: '975,592 bbl' },
];

// Well details table data
const wellDetailsHeaders = [
  { key: 'wellName', header: 'Well Name' },
  { key: 'currentOperator', header: 'Current Operator' },
  { key: 'holeDirection', header: 'Hole Direction' },
  { key: 'wellStatus', header: 'Well Status' },
  { key: 'state', header: 'State' },
  { key: 'county', header: 'County' },
];

const wellDetailsRows = [
  {
    id: '1',
    wellName: 'MCDANIEL B-CHRIESMAN 40 #104HA',
    currentOperator: 'VENCER ENERGY LLC',
    holeDirection: 'Horizontal',
    wellStatus: 'Producing',
    state: 'Texas',
    county: 'Glasscock',
  },
];

// Unit details table data
const unitDetailsHeaders = [
  { key: 'unitId', header: 'Unit ID' },
  { key: 'assignedToUnit', header: 'Assigned to Unit' },
  { key: 'assignmentType', header: 'Assignment Type' },
  { key: 'allocationMethod', header: 'Allocation Method' },
  { key: 'platBased', header: 'Plat Based' },
  { key: 'grossAcres', header: 'Gross Acres (GIS)' },
  { key: 'unitTractLength', header: 'Unit Tract Length (GIS)' },
  { key: 'unitTractWidth', header: 'Unit Tract Width (GIS)' },
];

const unitDetailsRows = [
  {
    id: '1',
    unitId: 'U-0000163491',
    assignedToUnit: 'Yes',
    assignmentType: 'Best Fit',
    allocationMethod: 'Lateral Length',
    platBased: 'Yes',
    grossAcres: '639.99',
    unitTractLength: '2,642 ft',
    unitTractWidth: '10,562 ft',
  },
  {
    id: '2',
    unitId: 'U-0000163493',
    assignedToUnit: 'No',
    assignmentType: 'N/A',
    allocationMethod: 'N/A',
    platBased: 'Yes',
    grossAcres: '320.00',
    unitTractLength: '1,321 ft',
    unitTractWidth: '10,559 ft',
  },
  {
    id: '3',
    unitId: 'U-0000163496',
    assignedToUnit: 'No',
    assignmentType: 'N/A',
    allocationMethod: 'N/A',
    platBased: 'No',
    grossAcres: '639.99',
    unitTractLength: '2,642 ft',
    unitTractWidth: '10,562 ft',
  },
  {
    id: '4',
    unitId: 'U-0000150604',
    assignedToUnit: 'No',
    assignmentType: 'N/A',
    allocationMethod: 'N/A',
    platBased: 'Yes',
    grossAcres: '274.54',
    unitTractLength: '1,321 ft',
    unitTractWidth: '9,084 ft',
  },
];

export const WellDetailsContent = () => {
  return (
    <div className="well-details-content">
      {/* Page Title */}
      <h1 className="well-details-content__title">Well Details</h1>

      {/* Map Section */}
      <div className="well-details-content__map-section">
        <div className="well-details-content__map-container">
          <img 
            src="/Mask group.png" 
            alt="Well location map"
            className="well-details-content__map-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="well-details-content__map-placeholder">
            <span>Map Placeholder</span>
            <p>Add your map image to: public/images/map.png</p>
          </div>
        </div>
        {/* Map Controls */}
        <div className="well-details-content__map-controls">
          <button className="map-control-btn"><ZoomIn16 /></button>
          <button className="map-control-btn"><ZoomOut16 /></button>
          <button className="map-control-btn"><Maximize16 /></button>
          <button className="map-control-btn"><Layers16 /></button>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="well-details-content__timeline-section">
        <div className="timeline-header">
          <h2 className="timeline-title">Well Life Timeline</h2>
          <Button 
            kind="tertiary" 
            size="field" 
            hasIconOnly 
            renderIcon={Edit16} 
            iconDescription="Edit timeline"
            className="timeline-edit-btn"
          />
        </div>
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline__item">
              <div className="timeline__marker">
                <div className="timeline__dot" />
                <div className="timeline__line" />
              </div>
              <div className="timeline__content">
                <span className="timeline__label">{item.label}</span>
                <span className="timeline__date">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Tiles */}
      <div className="well-details-content__stats-grid">
        {statsTiles.map((tile, index) => (
          <div key={index} className="stats-tile">
            <span className="stats-tile__label">{tile.label}</span>
            <span className="stats-tile__value">{tile.value}</span>
          </div>
        ))}
      </div>

      {/* Well Details Table */}
      <div className="well-details-content__table-section">
        <h2 className="section-title">Well Details</h2>
        <DataTable rows={wellDetailsRows} headers={wellDetailsHeaders}>
          {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
            <TableContainer>
              <Table {...getTableProps()}>
                <TableHead>
                  <TableRow>
                    {headers.map((header) => (
                      <TableHeader {...getHeaderProps({ header })} key={header.key}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow {...getRowProps({ row })} key={row.id}>
                      {row.cells.map((cell) => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </DataTable>
      </div>

      {/* Unit Details Section */}
      <div className="well-details-content__unit-section">
        <h2 className="well-details-content__section-heading">Unit Details</h2>
        <div className="well-details-content__unit-table-wrapper">
          <div className="unit-table-toolbar">
            <Search
              placeholder="Search input text"
              labelText="Search"
              size="lg"
              className="unit-table-search"
            />
            <div className="unit-table-actions">
              <Button kind="ghost" size="lg" hasIconOnly renderIcon={Copy16} iconDescription="Copy" />
              <Button kind="ghost" size="lg" hasIconOnly renderIcon={Filter16} iconDescription="Filter" />
              <Button kind="ghost" size="lg" hasIconOnly renderIcon={Column16} iconDescription="Columns" />
              <Button kind="ghost" size="lg" hasIconOnly renderIcon={ResetAlt16} iconDescription="Reset" disabled />
            </div>
          </div>
          <DataTable rows={unitDetailsRows} headers={unitDetailsHeaders}>
            {({ rows, headers, getTableProps, getHeaderProps, getRowProps }) => (
              <TableContainer>
                <Table {...getTableProps()}>
                  <TableHead>
                    <TableRow>
                      {headers.map((header) => (
                        <TableHeader {...getHeaderProps({ header })} key={header.key}>
                          {header.header}
                        </TableHeader>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, rowIndex) => (
                      <TableRow 
                        {...getRowProps({ row })} 
                        key={row.id}
                        className={rowIndex === 0 ? 'unit-row--primary' : 'unit-row--secondary'}
                      >
                        {row.cells.map((cell) => {
                          const isUnitId = cell.info.header === 'unitId';
                          const isNA = cell.value === 'N/A' || cell.value === 'No';
                          const isPrimary = rowIndex === 0;
                          
                          return (
                            <TableCell key={cell.id}>
                              {isUnitId ? (
                                <a href="#" className={`unit-link ${isPrimary ? 'unit-link--bold' : ''}`}>
                                  {cell.value}
                                </a>
                              ) : (
                                <span className={`unit-cell ${isNA && !isPrimary ? 'unit-cell--italic' : ''} ${isPrimary ? 'unit-cell--bold' : ''}`}>
                                  {cell.value}
                                </span>
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default WellDetailsContent;

