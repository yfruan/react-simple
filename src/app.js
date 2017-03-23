import React from 'react';
import a11y from 'react-a11y';
import Button from './components/Button';
import Loading from './components/Loading';
import Badge from './components/Badge';
import { Tabs, Tab } from './components/Tabs';
import { Menu, MenuItem, Separator } from './components/Menu';
import Table from './components/ResponsiveTable';
import MultiLineEllipsis from './components/MultiLineEllipsis';

a11y(React);

const tableHeader = {
  title: 'Book Title',
  author: 'Author',
  year: 'Year',
  ISBN: 'ISBN'
};

const tableData = [
  {
    title: 'JavaScript: The Definitive Guide',
    author: 'David Flanagan',
    year: '2006',
    ISBN: '9780596101992'
  },
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    year: '2008',
    ISBN: '9780596517748'
  },
  {
    title: 'Secrets of the JavaScript Ninja',
    author: 'John Resig / Bear Bibeault',
    year: '2012',
    ISBN: '9781933988696'
  },
  {
    title: 'Functional JavaScript',
    author: 'Michael Fogus',
    year: '2013',
    ISBN: '9781449360726'
  },
  {
    title: 'High Performance JavaScript',
    author: 'Nicholas C. Zakas',
    year: '2010',
    ISBN: '9780596802790'
  },
  {
    title: 'You Don\'t Know JS',
    author: <input aria-label="input test" onClick={(event) => { console.log('input focused'); event.stopPropagation(); }} placeholder="Kyle Simpson" />,
    year: '2010',
    ISBN: '9780596802790'
  }
];

const bigContent = 'Based on two popular talks from author Lea Verou—including CSS3 Secrets:' +
      '10 things you may not know about CSS—this practical guide provides intermediate to advanced' +
      'CSS developers with more than 40 undocumented techniques and tips for using CSS3 to create better websites.' +
      'The talks that spawned this book have been top-rated by attendees in every conference they were presented,' +
      'and praised in industry media such as .net magazine.' +
      'Get information you won’t find in any other book' +
      'Learn through small, easily digestible chapters' +
      'Helps you understand CSS more deeply so you can improve your own solutions' +
      'Apply Lea’s techniques to practically every CSS problem you face' +
      'Gain tips from a rockstar author who serves as an Invited Expert in W3C’s CSS Working Group';

const App = () =>
  <div>
    <h1>React simple components with basic style</h1>
    <h2 style={{ marginBottom: '50px' }}>Button</h2>
    <Button
      style={{ marginRight: '20px' }}
      onClick={() => { console.log('button clicked'); }}
      icon={<span className="icon is-medium">
        <i className="fa fa-home" />
      </span>}
      label="test"
      labelPosition="before"
      tooltipPosition="top"
      tooltip="display tooltip of this button"
    />

    <Button
      style={{ marginRight: '20px' }}
      icon={<span className="icon is-medium">
        <i className="fa fa-home" />
      </span>}
      label="test"
      labelPosition="after"
      tooltipPosition="bottom"
      tooltip="display tooltip of this button"
    />

    <Button
      style={{ marginRight: '20px' }}
      icon={<Loading />}
      ariaLabel="loading"
    />

    <Button
      style={{ marginRight: '20px' }}
      icon={<span className="icon is-medium">
        <i className="fa fa-home" />
      </span>}
      ariaLabel="home"
      disabled
      tooltip="display tooltip of this button"
    />

    <h2 style={{ marginBottom: '20px' }}>Badge</h2>
    <Badge badge="20">
      <i className="fa fa-envelope" />
    </Badge>

    <Badge badge={<i className="fa fa-registered" />} badgeStyle={{ backgroundColor: '#fff' }}>
      <span>budget</span>
    </Badge>

    <h2 style={{ marginBottom: '20px' }}>Tabs</h2>
    <Tabs selectedIndex={1} position="" onChange={(preIndex, index) => { console.log(`preIndex ${preIndex} index ${index}`); }}>
      <Tab label="tab one" onActive={(index) => { console.log(`select tab ${index}`); }}>
        <div>
          <p>Tab one content</p>
        </div>
      </Tab>
      <Tab label="tab two">
        <div>
          <p>Tab two content</p>
        </div>
      </Tab>
      <Tab label="tab three">
        <div>
          <p>Tab three content</p>
        </div>
      </Tab>
    </Tabs>

    <h2 style={{ marginBottom: '20px' }}>Menu</h2>
    <Menu>
      <MenuItem label="menu item one" onActive={() => { console.log('menu item one'); }} />
      <MenuItem label="menu item two" leftIcon={<i className="fa fa-check" />} rightIcon={<i className="fa fa-save" />} />
      <Separator />
      <MenuItem label="menu item three">
        <Menu>
          <MenuItem label="sub menu item one">
            <Menu>
              <MenuItem label="sub menu one sub sub menu item one" />
              <MenuItem label="sub menu two sub sub menu item two" />
            </Menu>
          </MenuItem>
          <MenuItem label="sub menu item two">
            <Menu>
              <MenuItem label="sub sub menu item one" />
              <MenuItem label="sub sub menu item two" />
            </Menu>
          </MenuItem>
        </Menu>
      </MenuItem>
    </Menu>

    <h2 style={{ marginBottom: '20px' }}>Responsive Table</h2>
    <Table header={tableHeader} data={tableData} selectable enableSelectAll multiSelectable onRowSeleted={(index, selected) => { console.log(`${selected ? 'selected' : 'deselected'} row `, index); }} onAllRowSelected={(selected) => { console.log(`all rows ${selected ? 'selected' : 'deselected'}`); }} />

    <h2 style={{ marginBottom: '20px' }}>Multi-Line ellipsis</h2>
    <MultiLineEllipsis content={bigContent} mark={<a href="">ReadMe</a>} markStyle={{ width: '8em', marginLeft: '-8em' }} />

  </div>;

export default App;
